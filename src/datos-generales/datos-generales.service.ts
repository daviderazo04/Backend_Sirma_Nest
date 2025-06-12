import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateDatosGeneraleDto } from './dto/create-datos-generale.dto';
import { UpdateDatosGeneraleDto } from './dto/update-datos-generale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Datosgenerales } from './entities/datos-generale.entity';
import { Repository } from 'typeorm';
@Injectable()
export class DatosGeneralesService {

  constructor(
    @InjectRepository(Datosgenerales)
    private datosGeneralesRepository:Repository<Datosgenerales>
  ){

  }

  async create(dto: CreateDatosGeneraleDto) {
    const nuevo = this.datosGeneralesRepository.create({
      ...dto,
      idficha: { idficha: dto.idFicha },
    });

    return await this.datosGeneralesRepository.save(nuevo);
  }

  async findAll() {
    return await this.datosGeneralesRepository.find();
  }

  async findOne(id: number) {
   const datogeneral = await this.datosGeneralesRepository.findOne({ where: { iddatosgenerales: id } });
    if (!datogeneral) {
      throw new NotFoundException(`Datogeneral con ID ${id} no encontrada.`);
    }
    return datogeneral;
  }

  async update(id: number, updateDatosGeneraleDto: UpdateDatosGeneraleDto) {
    const datogeneral = await this.findOne(id); // Reusa findOne para verificar existencia
    Object.assign(datogeneral, updateDatosGeneraleDto);
    return await this.datosGeneralesRepository.save(datogeneral);
  }

  async remove(id: number) {
   const result = await this.datosGeneralesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Datogeneral con ID ${id} no encontrada.`);
    }
  }
}
