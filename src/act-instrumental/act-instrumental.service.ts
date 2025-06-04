import { Injectable } from '@nestjs/common';
import { CreateActInstrumentalDto } from './dto/create-act-instrumental.dto';
import { UpdateActInstrumentalDto } from './dto/update-act-instrumental.dto';

@Injectable()
export class ActInstrumentalService {
  create(createActInstrumentalDto: CreateActInstrumentalDto) {
    return 'This action adds a new actInstrumental';
  }

  findAll() {
    return `This action returns all actInstrumental`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actInstrumental`;
  }

  update(id: number, updateActInstrumentalDto: UpdateActInstrumentalDto) {
    return `This action updates a #${id} actInstrumental`;
  }

  remove(id: number) {
    return `This action removes a #${id} actInstrumental`;
  }
}
