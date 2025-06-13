import { Injectable } from '@nestjs/common';
import { CreateMedicinaDto } from './dto/create-medicina.dto';
import { UpdateMedicinaDto } from './dto/update-medicina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicina } from './entities/medicina.entity';
import { Repository } from 'typeorm';
import { PacienteService } from '../paciente/paciente.service';  // Importar PacienteService


@Injectable()
export class MedicinaService {
  constructor(
    @InjectRepository(Medicina)
    private medicinaRepository: Repository<Medicina>,
    private pacienteService: PacienteService,  // Repositorio de Paciente
  ) {}

  async create(createMedicinaDto: CreateMedicinaDto) {
    // Verificar que `idFicha` no sea undefined
    if (!createMedicinaDto.idficha) {
      throw new Error('idFicha is required');  // Lanza un error si idFicha no está presente
    }

    const paciente = await this.pacienteService.findOne(createMedicinaDto.idficha);  // Usar el servicio de paciente

    if (!paciente) {
      throw new Error('Paciente not found');
    }

    const medicina = this.medicinaRepository.create({
      ...createMedicinaDto,
      idficha2: paciente,  // Asignar el paciente encontrado a la relación idficha2
    });

    return await this.medicinaRepository.save(medicina);  // Guardar la nueva medicina
  }

  async findAll() {
    return await this.medicinaRepository.find(); // Obtener todas las medicinas
  }

  async findOne(id: number) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } }); // Buscar por ID
    if (!medicina) {
      throw new Error('Medicina not found');
    }
    return medicina;
  }

  async update(id: number, updateMedicinaDto: UpdateMedicinaDto) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } }); // Buscar por ID
    if (!medicina) {
      throw new Error('Medicina not found');
    }

    // Actualizar los campos con los datos nuevos
    Object.assign(medicina, updateMedicinaDto); // Copia de los datos actualizados
    return await this.medicinaRepository.save(medicina); // Guardar los cambios
  }

  async remove(id: number) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } }); // Buscar por ID
    if (!medicina) {
      throw new Error('Medicina not found');
    }
    return await this.medicinaRepository.remove(medicina); // Eliminar de la base de datos
  }
}
