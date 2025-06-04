import { Injectable } from '@nestjs/common';
import { CreateAndrologicoDto } from './dto/create-andrologico.dto';
import { UpdateAndrologicoDto } from './dto/update-andrologico.dto';

@Injectable()
export class AndrologicoService {
  create(createAndrologicoDto: CreateAndrologicoDto) {
    return 'This action adds a new andrologico';
  }

  findAll() {
    return `This action returns all andrologico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} andrologico`;
  }

  update(id: number, updateAndrologicoDto: UpdateAndrologicoDto) {
    return `This action updates a #${id} andrologico`;
  }

  remove(id: number) {
    return `This action removes a #${id} andrologico`;
  }
}
