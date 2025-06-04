import { Injectable } from '@nestjs/common';
import { CreateTamizajeDto } from './dto/create-tamizaje.dto';
import { UpdateTamizajeDto } from './dto/update-tamizaje.dto';

@Injectable()
export class TamizajeService {
  create(createTamizajeDto: CreateTamizajeDto) {
    return 'This action adds a new tamizaje';
  }

  findAll() {
    return `This action returns all tamizaje`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tamizaje`;
  }

  update(id: number, updateTamizajeDto: UpdateTamizajeDto) {
    return `This action updates a #${id} tamizaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} tamizaje`;
  }
}
