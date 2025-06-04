import { Injectable } from '@nestjs/common';
import { CreateCribajeDto } from './dto/create-cribaje.dto';
import { UpdateCribajeDto } from './dto/update-cribaje.dto';

@Injectable()
export class CribajeService {
  create(createCribajeDto: CreateCribajeDto) {
    return 'This action adds a new cribaje';
  }

  findAll() {
    return `This action returns all cribaje`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cribaje`;
  }

  update(id: number, updateCribajeDto: UpdateCribajeDto) {
    return `This action updates a #${id} cribaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} cribaje`;
  }
}
