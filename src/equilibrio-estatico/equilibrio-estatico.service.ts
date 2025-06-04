import { Injectable } from '@nestjs/common';
import { CreateEquilibrioEstaticoDto } from './dto/create-equilibrio-estatico.dto';
import { UpdateEquilibrioEstaticoDto } from './dto/update-equilibrio-estatico.dto';

@Injectable()
export class EquilibrioEstaticoService {
  create(createEquilibrioEstaticoDto: CreateEquilibrioEstaticoDto) {
    return 'This action adds a new equilibrioEstatico';
  }

  findAll() {
    return `This action returns all equilibrioEstatico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equilibrioEstatico`;
  }

  update(id: number, updateEquilibrioEstaticoDto: UpdateEquilibrioEstaticoDto) {
    return `This action updates a #${id} equilibrioEstatico`;
  }

  remove(id: number) {
    return `This action removes a #${id} equilibrioEstatico`;
  }
}
