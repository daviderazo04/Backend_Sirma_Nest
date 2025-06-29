import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actinstrumental } from './entities/act-instrumental.entity';
import { CreateActInstrumentalDto } from './dto/create-act-instrumental.dto';
import { UpdateActInstrumentalDto } from './dto/update-act-instrumental.dto';
import { EnfermeriaService } from 'src/enfermeria/enfermeria.service';

@Injectable()
export class ActInstrumentalService {
  constructor(
    @InjectRepository(Actinstrumental)
    private actInstrumentalRepository: Repository<Actinstrumental>,
    @Inject(forwardRef(() => EnfermeriaService))
    private enfermeriaService: EnfermeriaService,
  ) {}

  async create(createDto: CreateActInstrumentalDto): Promise<Actinstrumental> {
    if (!createDto.idenfermeria) {
      throw new NotFoundException(
        'idEnfermeria es requerido para crear Act Instrumental.',
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

    const actInstrumental = this.actInstrumentalRepository.create({
      idenfermeria: createDto.idenfermeria,
      aiCuidacasa: createDto.aiCuidaCasa,
      aiUsatelefono: createDto.aiUsaTelefono,
      aiMediotransporte: createDto.aiMediosTransporte,
      aiPreparacomida: createDto.aiPreparaComida,
      aiLavaropa: createDto.aiLavaRopa,
      aiVacompras: createDto.aiVaCompras,
      aiManejadinero: createDto.aiManejaDinero,
      aiManejamedicina: createDto.aiManejaMedicina,
      aiTotal: createDto.aiTotales,
      idenfermeria2: enfermeria,
    });

    return await this.actInstrumentalRepository.save(actInstrumental);
  }

  async findAll(): Promise<Actinstrumental[]> {
    return await this.actInstrumentalRepository.find({
      relations: ['idenfermeria2'],
    });
  }

  async findOne(id: number): Promise<Actinstrumental> {
    const record = await this.actInstrumentalRepository.findOne({
      where: { idenfermeria: id },
      relations: ['idenfermeria2'],
    });

    if (!record) {
      throw new NotFoundException(
        `Act Instrumental con ID ${id} no encontrado.`,
      );
    }

    return record;
  }

  async update(
    id: number,
    updateDto: UpdateActInstrumentalDto,
  ): Promise<Actinstrumental> {
    const record = await this.actInstrumentalRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!record) {
      throw new NotFoundException(
        `Act Instrumental con ID ${id} no encontrado.`,
      );
    }

    const updateData: Partial<Actinstrumental> = {};

    if (updateDto.aiCuidaCasa !== undefined) {
      updateData.aiCuidacasa = updateDto.aiCuidaCasa;
    }
    if (updateDto.aiUsaTelefono !== undefined) {
      updateData.aiUsatelefono = updateDto.aiUsaTelefono;
    }
    if (updateDto.aiMediosTransporte !== undefined) {
      updateData.aiMediotransporte = updateDto.aiMediosTransporte;
    }
    if (updateDto.aiPreparaComida !== undefined) {
      updateData.aiPreparacomida = updateDto.aiPreparaComida;
    }
    if (updateDto.aiLavaRopa !== undefined) {
      updateData.aiLavaropa = updateDto.aiLavaRopa;
    }
    if (updateDto.aiVaCompras !== undefined) {
      updateData.aiVacompras = updateDto.aiVaCompras;
    }
    if (updateDto.aiManejaDinero !== undefined) {
      updateData.aiManejadinero = updateDto.aiManejaDinero;
    }
    if (updateDto.aiManejaMedicina !== undefined) {
      updateData.aiManejamedicina = updateDto.aiManejaMedicina;
    }
    if (updateDto.aiTotales !== undefined) {
      updateData.aiTotal = updateDto.aiTotales;
    }

    Object.assign(record, updateData);

    return await this.actInstrumentalRepository.save(record);
  }

  async remove(id: number) {
    const record = await this.actInstrumentalRepository.findOne({
      where: { idenfermeria: id },
    });

    if (!record) {
      throw new NotFoundException(
        `Act Instrumental con ID ${id} no encontrado.`,
      );
    }

    await this.actInstrumentalRepository.delete({ idenfermeria: id });

    return {
      message: `Act Instrumental con ID ${id} eliminado exitosamente.`,
    };
  }
}
