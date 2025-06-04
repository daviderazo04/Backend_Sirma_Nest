import { Injectable } from '@nestjs/common';
import { CreateSeguimientoSaludDto } from './dto/create-seguimiento-salud.dto';
import { UpdateSeguimientoSaludDto } from './dto/update-seguimiento-salud.dto';

@Injectable()
export class SeguimientoSaludService {
  create(createSeguimientoSaludDto: CreateSeguimientoSaludDto) {
    return 'This action adds a new seguimientoSalud';
  }

  findAll() {
    return `This action returns all seguimientoSalud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seguimientoSalud`;
  }

  update(id: number, updateSeguimientoSaludDto: UpdateSeguimientoSaludDto) {
    return `This action updates a #${id} seguimientoSalud`;
  }

  remove(id: number) {
    return `This action removes a #${id} seguimientoSalud`;
  }
}
