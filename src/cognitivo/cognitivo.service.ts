import { Injectable } from '@nestjs/common';
import { CreateCognitivoDto } from './dto/create-cognitivo.dto';
import { UpdateCognitivoDto } from './dto/update-cognitivo.dto';

@Injectable()
export class CognitivoService {
  create(createCognitivoDto: CreateCognitivoDto) {
    return 'This action adds a new cognitivo';
  }

  findAll() {
    return `This action returns all cognitivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cognitivo`;
  }

  update(id: number, updateCognitivoDto: UpdateCognitivoDto) {
    return `This action updates a #${id} cognitivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} cognitivo`;
  }
}
