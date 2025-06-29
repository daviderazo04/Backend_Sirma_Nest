import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actbasicas } from './entities/act-basica.entity';
import { CreateActBasicasDto } from './dto/create-act-basica.dto';
import { UpdateActBasicaDto } from './dto/update-act-basica.dto';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';

@Injectable()
export class ActBasicasService {
  constructor(
    @InjectRepository(Actbasicas)
    private actBasicasRepository: Repository<Actbasicas>,
    @Inject(forwardRef(() => EnfermeriaService))
    private enfermeriaService: EnfermeriaService,
  ) {}

  async create(createDto: CreateActBasicasDto): Promise<Actbasicas> {
    if (!createDto.idenfermeria) {
      throw new NotFoundException(
        'idEnfermeria es requerido para crear Act Basicas.',
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

    const actBasicas = this.actBasicasRepository.create({
      idenfermeria: createDto.idenfermeria,
      abBanasolo: createDto.abBanasolo ?? null,
      abVistedesvistesolo: createDto.abVistedesvistesolo ?? null,
      abCuidaapariencia: createDto.abCuidaapariencia ?? null,
      abUsainodoro: createDto.abUsainodoro ?? null,
      abControlesfinteres: createDto.abControlesfinteres ?? null,
      abTrasacuestalevanta: createDto.abTrasacuestalevanta ?? null,
      abCamina: createDto.abCamina ?? null,
      abAlimenta: createDto.abAlimenta ?? null,
      abTotal: createDto.abTotal ?? null,
      idenfermeria2: enfermeria,
    });

    return await this.actBasicasRepository.save(actBasicas);
  }

  async findAll(): Promise<Actbasicas[]> {
    return await this.actBasicasRepository.find({
      relations: ['idenfermeria2'],
    });
  }

  async findOne(id: number): Promise<Actbasicas> {
    const record = await this.actBasicasRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idenfermeria2'],
    });

    if (!record) {
      throw new NotFoundException(`Act Basicas con ID ${id} no encontrado.`);
    }

    return record;
  }

  async update(id: number, updateDto: UpdateActBasicaDto): Promise<Actbasicas> {
    const record: Actbasicas | null = await this.actBasicasRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!record) {
      throw new NotFoundException(`Act Basicas con ID ${id} no encontrado.`);
    }

    Object.assign(record, updateDto);

    return await this.actBasicasRepository.save(record);
  }

  async remove(id: number) {
    const record = await this.actBasicasRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!record) {
      throw new NotFoundException(`Act Basicas con ID ${id} no encontrado.`);
    }

    await this.actBasicasRepository.delete({ idenfermeria: id });

    return {
      message: `Act Basicas con ID ${id} eliminado exitosamente.`,
    };
  }
}
