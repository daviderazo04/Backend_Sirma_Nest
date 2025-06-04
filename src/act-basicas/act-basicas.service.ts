import { Injectable } from '@nestjs/common';
import { CreateActBasicaDto } from './dto/create-act-basica.dto';
import { UpdateActBasicaDto } from './dto/update-act-basica.dto';

@Injectable()
export class ActBasicasService {
  create(createActBasicaDto: CreateActBasicaDto) {
    return 'This action adds a new actBasica';
  }

  findAll() {
    return `This action returns all actBasicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actBasica`;
  }

  update(id: number, updateActBasicaDto: UpdateActBasicaDto) {
    return `This action updates a #${id} actBasica`;
  }

  remove(id: number) {
    return `This action removes a #${id} actBasica`;
  }
}
