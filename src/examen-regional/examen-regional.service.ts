import { Injectable } from '@nestjs/common';
import { CreateExamenRegionalDto } from './dto/create-examen-regional.dto';
import { UpdateExamenRegionalDto } from './dto/update-examen-regional.dto';

@Injectable()
export class ExamenRegionalService {
  create(createExamenRegionalDto: CreateExamenRegionalDto) {
    return 'This action adds a new examenRegional';
  }

  findAll() {
    return `This action returns all examenRegional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examenRegional`;
  }

  update(id: number, updateExamenRegionalDto: UpdateExamenRegionalDto) {
    return `This action updates a #${id} examenRegional`;
  }

  remove(id: number) {
    return `This action removes a #${id} examenRegional`;
  }
}
