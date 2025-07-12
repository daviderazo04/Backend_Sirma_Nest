import { Injectable } from '@nestjs/common';
import { CreateResumenNutricionalDto } from './dto/create-resumen-nutricional.dto';
import { UpdateResumenNutricionalDto } from './dto/update-resumen-nutricional.dto';

@Injectable()
export class ResumenNutricionalService {
  create(createResumenNutricionalDto: CreateResumenNutricionalDto) {
    return 'This action adds a new resumenNutricional';
  }

  findAll() {
    return `This action returns all resumenNutricional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resumenNutricional`;
  }

  update(id: number, updateResumenNutricionalDto: UpdateResumenNutricionalDto) {
    return `This action updates a #${id} resumenNutricional`;
  }

  remove(id: number) {
    return `This action removes a #${id} resumenNutricional`;
  }
}
