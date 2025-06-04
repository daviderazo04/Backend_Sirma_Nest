import { Injectable } from '@nestjs/common';
import { CreateZonadolorDto } from './dto/create-zonadolor.dto';
import { UpdateZonadolorDto } from './dto/update-zonadolor.dto';

@Injectable()
export class ZonadolorService {
  create(createZonadolorDto: CreateZonadolorDto) {
    return 'This action adds a new zonadolor';
  }

  findAll() {
    return `This action returns all zonadolor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zonadolor`;
  }

  update(id: number, updateZonadolorDto: UpdateZonadolorDto) {
    return `This action updates a #${id} zonadolor`;
  }

  remove(id: number) {
    return `This action removes a #${id} zonadolor`;
  }
}
