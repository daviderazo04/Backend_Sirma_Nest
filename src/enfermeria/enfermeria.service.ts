import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnfermeriaDto } from './dto/create-enfermeria.dto';
import { UpdateEnfermeriaDto } from './dto/update-enfermeria.dto';
import { Enfermeria } from './entities/enfermeria.entity';
import { PacienteService } from '../paciente/paciente.service';

@Injectable()
export class EnfermeriaService {
  constructor(
    @InjectRepository(Enfermeria)
    private enfermeriaRepository: Repository<Enfermeria>,
    private pacienteService: PacienteService,
  ) {}

  async create(createEnfermeriaDto: CreateEnfermeriaDto): Promise<Enfermeria> {
    if (!createEnfermeriaDto.idficha) {
      throw new NotFoundException('ID de Ficha (Paciente) es requerido para crear un registro de Enfermería.');
    }

    // Buscar el paciente asociado
    const paciente = await this.pacienteService.findOne(createEnfermeriaDto.idficha);

    if (!paciente) {
      throw new NotFoundException(`Paciente con ID de Ficha ${createEnfermeriaDto.idficha} no encontrado.`);
    }

    // Crear la entidad de Enfermería
    const enfermeria = this.enfermeriaRepository.create({
      ...createEnfermeriaDto,
      idficha2: paciente, // Relacionar con la entidad Paciente
    });

    return await this.enfermeriaRepository.save(enfermeria);
  }

  async findAll(): Promise<Enfermeria[]> {
    return await this.enfermeriaRepository.find({
      relations: ['idficha2'],
    });
  }

  async findOne(id: number): Promise<Enfermeria> {
    const enfermeria = await this.enfermeriaRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idficha2'],
    });

    if (!enfermeria) {
      throw new NotFoundException(`Registro de Enfermería con ID ${id} no encontrado.`);
    }

    return enfermeria;
  }

  async update(id: number, updateEnfermeriaDto: UpdateEnfermeriaDto): Promise<Enfermeria> {
    const enfermeria = await this.enfermeriaRepository.findOne({ where: { idenfermeria: id } });

    if (!enfermeria) {
      throw new NotFoundException(`Registro de Enfermería con ID ${id} no encontrado.`);
    }

    Object.assign(enfermeria, updateEnfermeriaDto);

    return await this.enfermeriaRepository.save(enfermeria);
  }

  async remove(id: number): Promise<Enfermeria> {
    const enfermeria = await this.enfermeriaRepository.findOne({ where: { idenfermeria: id } });

    if (!enfermeria) {
      throw new NotFoundException(`Registro de Enfermería con ID ${id} no encontrado.`);
    }

    return await this.enfermeriaRepository.remove(enfermeria);
  }
}
