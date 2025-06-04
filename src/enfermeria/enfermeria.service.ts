import { Injectable } from '@nestjs/common';
import { CreateEnfermeriaDto } from './dto/create-enfermeria.dto';
import { UpdateEnfermeriaDto } from './dto/update-enfermeria.dto';

@Injectable()
export class EnfermeriaService {
  create(createEnfermeriaDto: CreateEnfermeriaDto) {
    return 'This action adds a new enfermeria';
  }

  findAll() {
    return `This action returns all enfermeria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enfermeria`;
  }

  update(id: number, updateEnfermeriaDto: UpdateEnfermeriaDto) {
    return `This action updates a #${id} enfermeria`;
  }

  remove(id: number) {
    return `This action removes a #${id} enfermeria`;
  }
}
