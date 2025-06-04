import { Injectable } from '@nestjs/common';
import { CreatePatologicoDto } from './dto/create-patologico.dto';
import { UpdatePatologicoDto } from './dto/update-patologico.dto';

@Injectable()
export class PatologicoService {
  create(createPatologicoDto: CreatePatologicoDto) {
    return 'This action adds a new patologico';
  }

  findAll() {
    return `This action returns all patologico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patologico`;
  }

  update(id: number, updatePatologicoDto: UpdatePatologicoDto) {
    return `This action updates a #${id} patologico`;
  }

  remove(id: number) {
    return `This action removes a #${id} patologico`;
  }
}
