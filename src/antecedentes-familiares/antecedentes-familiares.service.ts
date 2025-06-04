import { Injectable } from '@nestjs/common';
import { CreateAntecedentesFamiliareDto } from './dto/create-antecedentes-familiare.dto';
import { UpdateAntecedentesFamiliareDto } from './dto/update-antecedentes-familiare.dto';

@Injectable()
export class AntecedentesFamiliaresService {
  create(createAntecedentesFamiliareDto: CreateAntecedentesFamiliareDto) {
    return 'This action adds a new antecedentesFamiliare';
  }

  findAll() {
    return `This action returns all antecedentesFamiliares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} antecedentesFamiliare`;
  }

  update(id: number, updateAntecedentesFamiliareDto: UpdateAntecedentesFamiliareDto) {
    return `This action updates a #${id} antecedentesFamiliare`;
  }

  remove(id: number) {
    return `This action removes a #${id} antecedentesFamiliare`;
  }
}
