import { Injectable } from '@nestjs/common';
import { CreateEquilibrioDinamicoDto } from './dto/create-equilibrio-dinamico.dto';
import { UpdateEquilibrioDinamicoDto } from './dto/update-equilibrio-dinamico.dto';

@Injectable()
export class EquilibrioDinamicoService {
  create(createEquilibrioDinamicoDto: CreateEquilibrioDinamicoDto) {
    return 'This action adds a new equilibrioDinamico';
  }

  findAll() {
    return `This action returns all equilibrioDinamico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equilibrioDinamico`;
  }

  update(id: number, updateEquilibrioDinamicoDto: UpdateEquilibrioDinamicoDto) {
    return `This action updates a #${id} equilibrioDinamico`;
  }

  remove(id: number) {
    return `This action removes a #${id} equilibrioDinamico`;
  }
}
