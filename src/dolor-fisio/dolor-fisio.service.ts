import { Injectable } from '@nestjs/common';
import { CreateDolorFisioDto } from './dto/create-dolor-fisio.dto';
import { UpdateDolorFisioDto } from './dto/update-dolor-fisio.dto';

@Injectable()
export class DolorFisioService {
  create(createDolorFisioDto: CreateDolorFisioDto) {
    return 'This action adds a new dolorFisio';
  }

  findAll() {
    return `This action returns all dolorFisio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dolorFisio`;
  }

  update(id: number, updateDolorFisioDto: UpdateDolorFisioDto) {
    return `This action updates a #${id} dolorFisio`;
  }

  remove(id: number) {
    return `This action removes a #${id} dolorFisio`;
  }
}
