// src/nutricion/nutricion.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nutricion } from './entities/nutricion.entity'; // Asegúrate de que la ruta sea correcta
import { CreateNutricionDto } from './dto/create-nutricion.dto';
import { UpdateNutricionDto } from './dto/update-nutricion.dto';

@Injectable()
export class NutricionService {
  constructor(
    @InjectRepository(Nutricion)
    private nutricionRepository: Repository<Nutricion>,
  ) {}

  /**
   * Crea un nuevo registro de nutrición en la base de datos.
   * @param createNutricionDto Datos para crear el registro de nutrición.
   * @returns El registro de nutrición creado.
   */
  async create(createNutricionDto: CreateNutricionDto): Promise<Nutricion> {
    const nutricion = this.nutricionRepository.create(createNutricionDto);
    return this.nutricionRepository.save(nutricion);
  }

  /**
   * Encuentra todos los registros de nutrición.
   * @returns Un array de registros de nutrición.
   */
  async findAll(): Promise<Nutricion[]> {
    // Puedes añadir relaciones si quieres que se carguen automáticamente
    // Por ejemplo: return this.nutricionRepository.find({ relations: ['idficha2'] });
    return this.nutricionRepository.find();
  }

  /**
   * Encuentra un registro de nutrición por su ID.
   * @param id El ID del registro de nutrición.
   * @returns El registro de nutrición encontrado.
   * @throws NotFoundException Si el registro no se encuentra.
   */
  async findOne(id: number): Promise<Nutricion> {
    const nutricion = await this.nutricionRepository.findOne({ where: { idnutricion: id } });
    if (!nutricion) {
      throw new NotFoundException(`Registro de Nutrición con ID ${id} no encontrado.`);
    }
    return nutricion;
  }

  /**
   * Actualiza un registro de nutrición existente.
   * @param id El ID del registro de nutrición a actualizar.
   * @param updateNutricionDto Los datos para actualizar el registro.
   * @returns El registro de nutrición actualizado.
   * @throws NotFoundException Si el registro no se encuentra.
   */
  async update(id: number, updateNutricionDto: UpdateNutricionDto): Promise<Nutricion> {
    const nutricion = await this.findOne(id); // Reutiliza findOne para verificar existencia
    Object.assign(nutricion, updateNutricionDto);
    return this.nutricionRepository.save(nutricion);
  }

  /**
   * Elimina un registro de nutrición por su ID.
   * @param id El ID del registro de nutrición a eliminar.
   * @returns Un mensaje de confirmación o el resultado de la eliminación.
   * @throws NotFoundException Si el registro no se encuentra.
   */
  async remove(id: number): Promise<void> {
    const result = await this.nutricionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Registro de Nutrición con ID ${id} no encontrado.`);
    }
  }
}
