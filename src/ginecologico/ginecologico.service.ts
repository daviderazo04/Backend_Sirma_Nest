import { Injectable } from '@nestjs/common';
import { CreateGinecologicoDto } from './dto/create-ginecologico.dto';
import { UpdateGinecologicoDto } from './dto/update-ginecologico.dto';

@Injectable()
export class GinecologicoService {
  create(createGinecologicoDto: CreateGinecologicoDto) {
    return 'This action adds a new ginecologico';
  }

  findAll() {
    return `This action returns all ginecologico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ginecologico`;
  }

  update(id: number, updateGinecologicoDto: UpdateGinecologicoDto) {
    return `This action updates a #${id} ginecologico`;
  }

  remove(id: number) {
    return `This action removes a #${id} ginecologico`;
  }
}
