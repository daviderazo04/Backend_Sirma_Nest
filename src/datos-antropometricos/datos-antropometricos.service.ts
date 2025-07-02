// src/datosantropometricos/datosantropometricos.service.ts

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity'; // Asegúrate de que la ruta sea correcta
import { Datosantropometricos } from './entities/datos-antropometrico.entity';
import { CreateDatosantropometricosDto } from './dto/create-datos-antropometrico.dto';

@Injectable()
export class DatosantropometricosService {
  constructor(
    @InjectRepository(Datosantropometricos)
    private readonly datosantropometricosRepository: Repository<Datosantropometricos>,
    @InjectRepository(Nutricion) // Inyecta el repositorio de Nutricion para verificar la existencia
    private readonly nutricionRepository: Repository<Nutricion>,
  ) {}

  /**
   * Crea nuevos datos antropométricos.
   * Verifica si la Nutricion asociada existe antes de crear los datos.
   * @param createDatosantropometricosDto Datos para crear los datos antropométricos.
   * @returns Los datos antropométricos creados.
   */
  async create(createDatosantropometricosDto: CreateDatosantropometricosDto): Promise<Datosantropometricos> {
    const { idnutricion, ...datosantropometricosData } = createDatosantropometricosDto;

    // Verificar si la nutrición con el idnutricion dado existe
    const nutricion = await this.nutricionRepository.findOneBy({ idnutricion });
    if (!nutricion) {
      throw new NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
    }

    // Verificar si ya existen datos antropométricos para este idnutricion (OneToOne y primary key)
    const existingDatos = await this.datosantropometricosRepository.findOneBy({ idnutricion });
    if (existingDatos) {
      throw new BadRequestException(`Ya existen datos antropométricos para el ID de Nutrición ${idnutricion}.`);
    }

    // Crear una nueva instancia de Datosantropometricos
    const nuevosDatos = this.datosantropometricosRepository.create({
      idnutricion: idnutricion,
      ...datosantropometricosData,
      idnutricion2: nutricion, // Asigna la entidad Nutricion completa para la relación
    });

    return this.datosantropometricosRepository.save(nuevosDatos);
  }

  /**
   * Obtiene todos los datos antropométricos.
   * @returns Un array de datos antropométricos.
   */
  async findAll(): Promise<Datosantropometricos[]> {
    return this.datosantropometricosRepository.find({
      relations: ['idnutricion2'], // Carga la relación con Nutricion
    });
  }

  /**
   * Obtiene datos antropométricos por su ID de Nutrición.
   * @param id El ID de Nutrición de los datos antropométricos.
   * @returns Los datos antropométricos encontrados.
   * @throws NotFoundException Si los datos no se encuentran.
   */
  async findOne(id: number): Promise<Datosantropometricos> {
    const datos = await this.datosantropometricosRepository.findOne({
      where: { idnutricion: id },
      relations: ['idnutricion2'], // Carga la relación con Nutricion
    });
    if (!datos) {
      throw new NotFoundException(`Datos antropométricos con ID de Nutrición ${id} no encontrados.`);
    }
    return datos;
  }

  /**
   * Actualiza datos antropométricos existentes por su ID de Nutrición.
   * @param id El ID de Nutrición de los datos a actualizar.
   * @param updateDatosantropometricosDto Datos para actualizar los datos.
   * @returns Los datos antropométricos actualizados.
   * @throws NotFoundException Si los datos no se encuentran.
   */
  async update(id: number, updateDatosantropometricosDto: CreateDatosantropometricosDto): Promise<Datosantropometricos> {
    const datos = await this.datosantropometricosRepository.findOneBy({ idnutricion: id });
    if (!datos) {
      throw new NotFoundException(`Datos antropométricos con ID de Nutrición ${id} no encontrados.`);
    }

    // Ignoramos idnutricion si viene en el DTO de actualización ya que es la PK.
    const { idnutricion, ...dataToUpdate } = updateDatosantropometricosDto;

    // Actualiza las propiedades de la entidad existente
    Object.assign(datos, dataToUpdate);

    return this.datosantropometricosRepository.save(datos);
  }

  /**
   * Elimina datos antropométricos por su ID de Nutrición.
   * @param id El ID de Nutrición de los datos a eliminar.
   * @returns Un objeto con el resultado de la eliminación.
   * @throws NotFoundException Si los datos no se encuentran.
   */
  async remove(id: number): Promise<{ affected?: number }> {
    const result: DeleteResult = await this.datosantropometricosRepository.delete(id);
    if (result.affected === 0 || result.affected === null) {
      throw new NotFoundException(`Datos antropométricos con ID de Nutrición ${id} no encontrados.`);
    }
    return { affected: result.affected ?? undefined };
  }
}
