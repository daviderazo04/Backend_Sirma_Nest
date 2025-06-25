// src/zonadolor/zonadolor.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZonadolorDto } from './dto/create-zonadolor.dto';
import { UpdateZonadolorDto } from './dto/update-zonadolor.dto';
import { Zonadolor } from './entities/zonadolor.entity';

@Injectable()
export class ZonadolorService {
  constructor(
    @InjectRepository(Zonadolor)
    private zonadolorRepository: Repository<Zonadolor>,
  ) {}

  async create(createZonadolorDto: CreateZonadolorDto): Promise<Zonadolor> {
    const zonadolor = this.zonadolorRepository.create(createZonadolorDto);
    return await this.zonadolorRepository.save(zonadolor);
  }

  async findAll(): Promise<Zonadolor[]> {
    // Puedes cargar la relación con dolorfisios si lo necesitas,
    // pero para una lista simple, no es necesario.
    return await this.zonadolorRepository.find();
  }

  async findOne(id: number): Promise<Zonadolor> {
    const zonadolor = await this.zonadolorRepository.findOne({
      where: { idzona: id },
      // relations: ['dolorfisios'], // Opcional: cargar la relación con Dolorfisio
    });

    if (!zonadolor) {
      throw new NotFoundException(`Zona de Dolor con ID ${id} no encontrada.`);
    }

    return zonadolor;
  }

  async update(id: number, updateZonadolorDto: UpdateZonadolorDto): Promise<Zonadolor> {
    const zonadolor = await this.zonadolorRepository.findOne({ where: { idzona: id } });

    if (!zonadolor) {
      throw new NotFoundException(`Zona de Dolor con ID ${id} no encontrada.`);
    }

    Object.assign(zonadolor, updateZonadolorDto);

    return await this.zonadolorRepository.save(zonadolor);
  }

  async remove(id: number): Promise<void> {
    const result = await this.zonadolorRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Zona de Dolor con ID ${id} no encontrada.`);
    }
  }
}