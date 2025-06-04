import { Injectable } from '@nestjs/common';
import { CreateNutricionDto } from './dto/create-nutricion.dto';
import { UpdateNutricionDto } from './dto/update-nutricion.dto';

@Injectable()
export class NutricionService {
  create(createNutricionDto: CreateNutricionDto) {
    return 'This action adds a new nutricion';
  }

  findAll() {
    return `This action returns all nutricion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutricion`;
  }

  update(id: number, updateNutricionDto: UpdateNutricionDto) {
    return `This action updates a #${id} nutricion`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutricion`;
  }
}
