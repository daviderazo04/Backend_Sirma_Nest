import { Injectable } from '@nestjs/common';
import { CreateFarmacologicoDto } from './dto/create-farmacologico.dto';
import { UpdateFarmacologicoDto } from './dto/update-farmacologico.dto';

@Injectable()
export class FarmacologicoService {
  create(createFarmacologicoDto: CreateFarmacologicoDto) {
    return 'This action adds a new farmacologico';
  }

  findAll() {
    return `This action returns all farmacologico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} farmacologico`;
  }

  update(id: number, updateFarmacologicoDto: UpdateFarmacologicoDto) {
    return `This action updates a #${id} farmacologico`;
  }

  remove(id: number) {
    return `This action removes a #${id} farmacologico`;
  }
}
