import { Injectable } from '@nestjs/common';
import { CreateTonoMuscularDto } from './dto/create-tono-muscular.dto';
import { UpdateTonoMuscularDto } from './dto/update-tono-muscular.dto';

@Injectable()
export class TonoMuscularService {
  create(createTonoMuscularDto: CreateTonoMuscularDto) {
    return 'This action adds a new tonoMuscular';
  }

  findAll() {
    return `This action returns all tonoMuscular`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tonoMuscular`;
  }

  update(id: number, updateTonoMuscularDto: UpdateTonoMuscularDto) {
    return `This action updates a #${id} tonoMuscular`;
  }

  remove(id: number) {
    return `This action removes a #${id} tonoMuscular`;
  }
}
