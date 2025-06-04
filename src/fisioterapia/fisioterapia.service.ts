import { Injectable } from '@nestjs/common';
import { CreateFisioterapiaDto } from './dto/create-fisioterapia.dto';
import { UpdateFisioterapiaDto } from './dto/update-fisioterapia.dto';

@Injectable()
export class FisioterapiaService {
  create(createFisioterapiaDto: CreateFisioterapiaDto) {
    return 'This action adds a new fisioterapia';
  }

  findAll() {
    return `This action returns all fisioterapia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fisioterapia`;
  }

  update(id: number, updateFisioterapiaDto: UpdateFisioterapiaDto) {
    return `This action updates a #${id} fisioterapia`;
  }

  remove(id: number) {
    return `This action removes a #${id} fisioterapia`;
  }
}
