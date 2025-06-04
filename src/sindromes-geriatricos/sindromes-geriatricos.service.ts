import { Injectable } from '@nestjs/common';
import { CreateSindromesGeriatricoDto } from './dto/create-sindromes-geriatrico.dto';
import { UpdateSindromesGeriatricoDto } from './dto/update-sindromes-geriatrico.dto';

@Injectable()
export class SindromesGeriatricosService {
  create(createSindromesGeriatricoDto: CreateSindromesGeriatricoDto) {
    return 'This action adds a new sindromesGeriatrico';
  }

  findAll() {
    return `This action returns all sindromesGeriatricos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sindromesGeriatrico`;
  }

  update(id: number, updateSindromesGeriatricoDto: UpdateSindromesGeriatricoDto) {
    return `This action updates a #${id} sindromesGeriatrico`;
  }

  remove(id: number) {
    return `This action removes a #${id} sindromesGeriatrico`;
  }
}
