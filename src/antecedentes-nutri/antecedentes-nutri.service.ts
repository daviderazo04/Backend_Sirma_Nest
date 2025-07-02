// src/antecedentesnutri/antecedentesnutri.service.ts

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

import { Nutricion } from 'src/nutricion/entities/nutricion.entity'; // Asegúrate de que la ruta sea correcta
import { Antecedentesnutri } from './entities/antecedentes-nutri.entity';
import { CreateAntecedentesnutriDto } from './dto/create-antecedentes-nutri.dto';

@Injectable()
export class AntecedentesnutriService {
  constructor(
    @InjectRepository(Antecedentesnutri)
    private readonly antecedentesnutriRepository: Repository<Antecedentesnutri>,
    @InjectRepository(Nutricion) // Inyecta el repositorio de Nutricion para verificar la existencia
    private readonly nutricionRepository: Repository<Nutricion>,
  ) {}

  /**
   * Crea un nuevo antecedente nutricional.
   * Verifica si la Nutricion asociada existe antes de crear el antecedente.
   * @param createAntecedentesnutriDto Datos para crear el antecedente.
   * @returns El antecedente nutricional creado.
   */
  async create(createAntecedentesnutriDto: CreateAntecedentesnutriDto): Promise<Antecedentesnutri> {
    const { idnutricion, ...antecedentesData } = createAntecedentesnutriDto;

    // Verificar si la nutrición con el idnutricion dado existe
    const nutricion = await this.nutricionRepository.findOneBy({ idnutricion });
    if (!nutricion) {
      throw new NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
    }

    // Verificar si ya existe un antecedente nutricional para este idnutricion (OneToOne y primary key)
    const existingAntecedente = await this.antecedentesnutriRepository.findOneBy({ idnutricion });
    if (existingAntecedente) {
      throw new BadRequestException(`Ya existe un antecedente nutricional para el ID de Nutrición ${idnutricion}.`);
    }

    // Crear una nueva instancia de Antecedentesnutri
    const nuevoAntecedente = this.antecedentesnutriRepository.create({
      idnutricion: idnutricion,
      ...antecedentesData,
      idnutricion2: nutricion, // Asigna la entidad Nutricion completa para la relación
    });

    return this.antecedentesnutriRepository.save(nuevoAntecedente);
  }

  /**
   * Obtiene todos los antecedentes nutricionales.
   * @returns Un array de antecedentes nutricionales.
   */
  async findAll(): Promise<Antecedentesnutri[]> {
    return this.antecedentesnutriRepository.find({
      relations: ['idnutricion2'], // Carga la relación con Nutricion
    });
  }

  /**
   * Obtiene un antecedente nutricional por su ID de Nutrición.
   * @param id El ID de Nutrición del antecedente.
   * @returns El antecedente nutricional encontrado.
   * @throws NotFoundException Si el antecedente no se encuentra.
   */
  async findOne(id: number): Promise<Antecedentesnutri> {
    const antecedente = await this.antecedentesnutriRepository.findOne({
      where: { idnutricion: id },
      relations: ['idnutricion2'], // Carga la relación con Nutricion
    });
    if (!antecedente) {
      throw new NotFoundException(`Antecedente nutricional con ID de Nutrición ${id} no encontrado.`);
    }
    return antecedente;
  }

  /**
   * Actualiza un antecedente nutricional existente por su ID de Nutrición.
   * @param id El ID de Nutrición del antecedente a actualizar.
   * @param updateAntecedentesnutriDto Datos para actualizar el antecedente.
   * @returns El antecedente nutricional actualizado.
   * @throws NotFoundException Si el antecedente no se encuentra.
   */
  async update(id: number, updateAntecedentesnutriDto: CreateAntecedentesnutriDto): Promise<Antecedentesnutri> {
    const antecedente = await this.antecedentesnutriRepository.findOneBy({ idnutricion: id });
    if (!antecedente) {
      throw new NotFoundException(`Antecedente nutricional con ID de Nutrición ${id} no encontrado.`);
    }

    // Ignoramos idnutricion si viene en el DTO de actualización ya que es la PK.
    const { idnutricion, ...dataToUpdate } = updateAntecedentesnutriDto;

    // Actualiza las propiedades de la entidad existente
    Object.assign(antecedente, dataToUpdate);

    return this.antecedentesnutriRepository.save(antecedente);
  }

  /**
   * Elimina un antecedente nutricional por su ID de Nutrición.
   * @param id El ID de Nutrición del antecedente a eliminar.
   * @returns Un objeto con el resultado de la eliminación.
   * @throws NotFoundException Si el antecedente no se encuentra.
   */
  async remove(id: number): Promise<{ affected?: number }> {
    const result: DeleteResult = await this.antecedentesnutriRepository.delete(id);
    if (result.affected === 0 || result.affected === null) {
      throw new NotFoundException(`Antecedente nutricional con ID de Nutrición ${id} no encontrado.`);
    }
    return { affected: result.affected ?? undefined };
  }
}
