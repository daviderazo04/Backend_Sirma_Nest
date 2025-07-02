// src/evaluacion/evaluacion.service.ts

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm'; // Importa DeleteResult
import { Evaluacion } from './entities/evaluacion.entity';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity'; // Asegúrate de que la ruta sea correcta

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private readonly evaluacionRepository: Repository<Evaluacion>,
    @InjectRepository(Nutricion) // Inyecta el repositorio de Nutricion para verificar la existencia
    private readonly nutricionRepository: Repository<Nutricion>,
  ) {}

  /**
   * Crea una nueva evaluación.
   * Verifica si la Nutricion asociada existe antes de crear la evaluación.
   * @param createEvaluacionDto Datos para crear la evaluación.
   * @returns La evaluación creada.
   */
  async create(createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion> {
    const { idnutricion, ...evaluacionData } = createEvaluacionDto;

    // Verificar si la nutrición con el idnutricion dado existe
    const nutricion = await this.nutricionRepository.findOneBy({ idnutricion });
    if (!nutricion) {
      throw new NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
    }

    // Verificar si ya existe una evaluación para este idnutricion (ya que es una relación OneToOne y primary key)
    const existingEvaluacion = await this.evaluacionRepository.findOneBy({ idnutricion });
    if (existingEvaluacion) {
      throw new BadRequestException(`Ya existe una evaluación para el ID de Nutrición ${idnutricion}.`);
    }

    // Crear una nueva instancia de Evaluacion y asignarle el idnutricion
    const nuevaEvaluacion = this.evaluacionRepository.create({
      idnutricion: idnutricion, // Asigna el ID de nutrición directamente
      ...evaluacionData,
      idnutricion2: nutricion, // Asigna la entidad Nutricion completa para la relación
    });

    return this.evaluacionRepository.save(nuevaEvaluacion);
  }

  /**
   * Obtiene todas las evaluaciones.
   * @returns Un array de evaluaciones.
   */
  async findAll(): Promise<Evaluacion[]> {
    return this.evaluacionRepository.find({
      relations: ['idnutricion2'], // Carga la relación con Nutricion
    });
  }

  /**
   * Obtiene una evaluación por su ID de Nutrición.
   * @param id El ID de Nutrición de la evaluación.
   * @returns La evaluación encontrada.
   * @throws NotFoundException Si la evaluación no se encuentra.
   */
  async findOne(id: number): Promise<Evaluacion> {
    const evaluacion = await this.evaluacionRepository.findOne({
      where: { idnutricion: id },
      relations: ['idnutricion2'], // Carga la relación con Nutricion
    });
    if (!evaluacion) {
      throw new NotFoundException(`Evaluación con ID de Nutrición ${id} no encontrada.`);
    }
    return evaluacion;
  }

  /**
   * Actualiza una evaluación existente por su ID de Nutrición.
   * @param id El ID de Nutrición de la evaluación a actualizar.
   * @param updateEvaluacionDto Datos para actualizar la evaluación.
   * @returns La evaluación actualizada.
   * @throws NotFoundException Si la evaluación no se encuentra.
   */
  async update(id: number, updateEvaluacionDto: UpdateEvaluacionDto): Promise<Evaluacion> {
    const evaluacion = await this.evaluacionRepository.findOneBy({ idnutricion: id });
    if (!evaluacion) {
      throw new NotFoundException(`Evaluación con ID de Nutrición ${id} no encontrada.`);
    }

    // Si se intenta cambiar idnutricion en la actualización, lo ignoramos o lanzamos un error
    // ya que es la clave primaria y la relación OneToOne.
    // Si necesitas cambiar la relación, deberías manejarlo de otra manera.
    const { idnutricion, ...dataToUpdate } = updateEvaluacionDto;

    // Actualiza las propiedades de la entidad existente
    Object.assign(evaluacion, dataToUpdate);

    return this.evaluacionRepository.save(evaluacion);
  }

  /**
   * Elimina una evaluación por su ID de Nutrición.
   * @param id El ID de Nutrición de la evaluación a eliminar.
   * @returns Un objeto con el resultado de la eliminación.
   * @throws NotFoundException Si la evaluación no se encuentra.
   */
  async remove(id: number): Promise<{ affected?: number }> {
    const result: DeleteResult = await this.evaluacionRepository.delete(id);
    if (result.affected === 0 || result.affected === null) { // Agregamos la verificación para null
      throw new NotFoundException(`Evaluación con ID de Nutrición ${id} no encontrada.`);
    }
    // Aseguramos que 'affected' sea un número o undefined, no null.
    return { affected: result.affected ?? undefined };
  }
}
