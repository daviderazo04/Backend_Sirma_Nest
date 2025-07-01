// src/cribaje/cribaje.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cribaje } from './entities/cribaje.entity';
import { CreateCribajeDto } from './dto/create-cribaje.dto';
import { Nutricion } from '../nutricion/entities/nutricion.entity'; // Asegúrate de que la ruta sea correcta
import { UpdateCribajeDto } from './dto/update-cribaje.dto';

@Injectable()
export class CribajeService {
  constructor(
    @InjectRepository(Cribaje)
    private cribajeRepository: Repository<Cribaje>,
    @InjectRepository(Nutricion) // Inyecta el repositorio de Nutricion
    private nutricionRepository: Repository<Nutricion>,
  ) {}

  /**
   * Crea un nuevo registro de cribaje.
   * @param createCribajeDto Los datos para crear el cribaje.
   * @returns El registro de cribaje creado.
   */
  async create(createCribajeDto: CreateCribajeDto): Promise<Cribaje> {
    const { idnutricion } = createCribajeDto;

    // 1. Verificar si la Nutricion existe
    const nutricionExists = await this.nutricionRepository.findOne({ where: { idnutricion } });
    if (!nutricionExists) {
      throw new NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
    }

    // 2. Verificar si ya existe un cribaje para esta nutrición
    const existingCribaje = await this.cribajeRepository.findOne({ where: { idnutricion } });
    if (existingCribaje) {
      throw new ConflictException(`Ya existe un registro de Cribaje para la Nutricion con ID ${idnutricion}.`);
    }

    // 3. Crear y guardar el nuevo cribaje
    const newCribaje = this.cribajeRepository.create(createCribajeDto);
    // Asignar la entidad Nutricion para la relación si es necesario, aunque TypeORM lo maneja con el ID
    newCribaje.idnutricion2 = nutricionExists;

    try {
      return await this.cribajeRepository.save(newCribaje);
    } catch (error) {
      // Manejo de errores específicos de la base de datos si es necesario
      console.error('Error al guardar el cribaje:', error.message);
      throw error; // Re-lanza el error para que sea manejado por el interceptor de excepciones de NestJS
    }
  }

  /**
   * Encuentra todos los registros de cribaje.
   * @returns Una lista de registros de cribaje.
   */
  findAll(): Promise<Cribaje[]> {
    return this.cribajeRepository.find();
  }

  /**
   * Encuentra un registro de cribaje por su ID de nutrición.
   * @param id El ID de la nutrición.
   * @returns El registro de cribaje encontrado.
   */
  async findOne(id: number): Promise<Cribaje> {
    const cribaje = await this.cribajeRepository.findOne({ where: { idnutricion: id } });
    if (!cribaje) {
      throw new NotFoundException(`Cribaje con ID de Nutricion ${id} no encontrado.`);
    }
    return cribaje;
  }

  async update(idnutricion: number, updateCribajeDto: UpdateCribajeDto): Promise<Cribaje> {
    const cribaje = await this.cribajeRepository.findOne({ where: { idnutricion } });
    if (!cribaje) {
      throw new NotFoundException(`Cribaje con ID de Nutricion ${idnutricion} no encontrado.`);
    }

    // Si se intenta cambiar el idnutricion en la actualización, es mejor prohibirlo o manejarlo de forma explícita
    if (updateCribajeDto.idnutricion && updateCribajeDto.idnutricion !== idnutricion) {
      throw new ConflictException('No se permite cambiar el ID de Nutricion de un cribaje existente.');
    }

    // Actualiza las propiedades del cribaje con los datos del DTO
    this.cribajeRepository.merge(cribaje, updateCribajeDto);

    try {
      return await this.cribajeRepository.save(cribaje);
    } catch (error) {
      console.error('Error al actualizar el cribaje:', error.message);
      throw error;
    }
  }

  /**
   * Elimina un registro de cribaje por su ID de nutrición.
   * @param idnutricion El ID de la nutrición del cribaje a eliminar.
   */
  async remove(idnutricion: number): Promise<void> {
    const result = await this.cribajeRepository.delete({ idnutricion });
    if (result.affected === 0) {
      throw new NotFoundException(`Cribaje con ID de Nutricion ${idnutricion} no encontrado.`);
    }
  }
}
