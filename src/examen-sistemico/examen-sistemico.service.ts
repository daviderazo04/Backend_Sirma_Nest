import { Injectable } from '@nestjs/common';
import { CreateExamenSistemicoDto } from './dto/create-examen-sistemico.dto';
import { UpdateExamenSistemicoDto } from './dto/update-examen-sistemico.dto';

@Injectable()
export class ExamenSistemicoService {
  create(createExamenSistemicoDto: CreateExamenSistemicoDto) {
    return 'This action adds a new examenSistemico';
  }

  findAll() {
    return `This action returns all examenSistemico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examenSistemico`;
  }

  update(id: number, updateExamenSistemicoDto: UpdateExamenSistemicoDto) {
    return `This action updates a #${id} examenSistemico`;
  }

  remove(id: number) {
    return `This action removes a #${id} examenSistemico`;
  }
}
