import { Injectable } from '@nestjs/common';
import { CreateFuerzaDto } from './dto/create-fuerza.dto';
import { UpdateFuerzaDto } from './dto/update-fuerza.dto';

@Injectable()
export class FuerzaService {
  create(createFuerzaDto: CreateFuerzaDto) {
    return 'This action adds a new fuerza';
  }

  findAll() {
    return `This action returns all fuerza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fuerza`;
  }

  update(id: number, updateFuerzaDto: UpdateFuerzaDto) {
    return `This action updates a #${id} fuerza`;
  }

  remove(id: number) {
    return `This action removes a #${id} fuerza`;
  }
}
