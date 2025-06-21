import { Injectable } from '@nestjs/common';
import { CreateSeguimientoFisioterapiaDto } from './dto/create-seguimiento-fisioterapia.dto';
import { UpdateSeguimientoFisioterapiaDto } from './dto/update-seguimiento-fisioterapia.dto';

@Injectable()
export class SeguimientoFisioterapiaService {
  create(createSeguimientoFisioterapiaDto: CreateSeguimientoFisioterapiaDto) {
    return 'This action adds a new seguimientoFisioterapia';
  }

  findAll() {
    return `This action returns all seguimientoFisioterapia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seguimientoFisioterapia`;
  }

  update(
    id: number,
    updateSeguimientoFisioterapiaDto: UpdateSeguimientoFisioterapiaDto,
  ) {
    return `This action updates a #${id} seguimientoFisioterapia`;
  }

  remove(id: number) {
    return `This action removes a #${id} seguimientoFisioterapia`;
  }
}
