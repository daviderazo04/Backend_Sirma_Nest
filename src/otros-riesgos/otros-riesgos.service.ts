import { Injectable } from '@nestjs/common';
import { CreateOtrosRiesgoDto } from './dto/create-otros-riesgo.dto';
import { UpdateOtrosRiesgoDto } from './dto/update-otros-riesgo.dto';

@Injectable()
export class OtrosRiesgosService {
  create(createOtrosRiesgoDto: CreateOtrosRiesgoDto) {
    return 'This action adds a new otrosRiesgo';
  }

  findAll() {
    return `This action returns all otrosRiesgos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otrosRiesgo`;
  }

  update(id: number, updateOtrosRiesgoDto: UpdateOtrosRiesgoDto) {
    return `This action updates a #${id} otrosRiesgo`;
  }

  remove(id: number) {
    return `This action removes a #${id} otrosRiesgo`;
  }
}
