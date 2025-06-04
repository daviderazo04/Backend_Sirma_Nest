import { Injectable } from '@nestjs/common';
import { CreateDepresionDto } from './dto/create-depresion.dto';
import { UpdateDepresionDto } from './dto/update-depresion.dto';

@Injectable()
export class DepresionService {
  create(createDepresionDto: CreateDepresionDto) {
    return 'This action adds a new depresion';
  }

  findAll() {
    return `This action returns all depresion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depresion`;
  }

  update(id: number, updateDepresionDto: UpdateDepresionDto) {
    return `This action updates a #${id} depresion`;
  }

  remove(id: number) {
    return `This action removes a #${id} depresion`;
  }
}
