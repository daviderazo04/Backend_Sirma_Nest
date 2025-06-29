import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tamizaje } from './entities/tamizaje.entity';
import { CreateTamizajeDto } from './dto/create-tamizaje.dto';
import { UpdateTamizajeDto } from './dto/update-tamizaje.dto';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';

@Injectable()
export class TamizajeService {
  constructor(
    @InjectRepository(Tamizaje)
    private tamizajeRepository: Repository<Tamizaje>,
    @Inject(forwardRef(() => EnfermeriaService))
    private enfermeriaService: EnfermeriaService,
  ) {}

  async create(createDto: CreateTamizajeDto): Promise<Tamizaje> {
    if (!createDto.idenfermeria) {
      throw new NotFoundException(
        'idEnfermeria es requerido para crear Tamizaje.',
      );
    }

    const enfermeria = await this.enfermeriaService.findOne(
      createDto.idenfermeria,
    );

    if (!enfermeria) {
      throw new NotFoundException(
        `Enfermería con ID ${createDto.idenfermeria} no encontrada.`,
      );
    }

    const tamizaje = this.tamizajeRepository.create({
      idenfermeria: createDto.idenfermeria,
      tamDifvisual: createDto.tamDifvisual ?? null,
      tamDifauditiva: createDto.tamDifauditiva ?? null,
      tamLevanteanda: createDto.tamLevanteanda ?? null,
      tamPerdidaorina: createDto.tamPerdidaorina ?? null,
      tamPerdidapeso: createDto.tamPerdidapeso ?? null,
      tamPerdidamemoria: createDto.tamPerdidamemoria ?? null,
      tamTristedeprimido: createDto.tamTristedeprimido ?? null,
      tamBanarsolo: createDto.tamBanarsolo ?? null,
      tamComprasolo: createDto.tamComprasolo ?? null,
      tamVivesolo: createDto.tamVivesolo ?? null,
      tamTotal: createDto.tamTotal ?? null,
      idenfermeria2: enfermeria,
    });

    return await this.tamizajeRepository.save(tamizaje);
  }

  async findAll(): Promise<Tamizaje[]> {
    return await this.tamizajeRepository.find({
      relations: ['idenfermeria2'],
    });
  }

  async findOne(id: number): Promise<Tamizaje> {
    const tamizaje = await this.tamizajeRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idenfermeria2'],
    });

    if (!tamizaje) {
      throw new NotFoundException(`Tamizaje con ID ${id} no encontrado.`);
    }

    return tamizaje;
  }

  async update(id: number, updateDto: UpdateTamizajeDto): Promise<Tamizaje> {
    const record = await this.tamizajeRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!record) {
      throw new NotFoundException(`Tamizaje con ID ${id} no encontrado.`);
    }

    Object.assign(record, updateDto);

    return await this.tamizajeRepository.save(record);
  }

  async remove(id: number) {
    const record = await this.tamizajeRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!record) {
      throw new NotFoundException(`Tamizaje con ID ${id} no encontrado.`);
    }

    await this.tamizajeRepository.delete({ idenfermeria: id });

    return {
      message: `Tamizaje con ID ${id} eliminado exitosamente.`,
    };
  }
}
