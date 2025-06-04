import { Injectable } from '@nestjs/common';
import { CreateAntecedentesNutriDto } from './dto/create-antecedentes-nutri.dto';
import { UpdateAntecedentesNutriDto } from './dto/update-antecedentes-nutri.dto';

@Injectable()
export class AntecedentesNutriService {
  create(createAntecedentesNutriDto: CreateAntecedentesNutriDto) {
    return 'This action adds a new antecedentesNutri';
  }

  findAll() {
    return `This action returns all antecedentesNutri`;
  }

  findOne(id: number) {
    return `This action returns a #${id} antecedentesNutri`;
  }

  update(id: number, updateAntecedentesNutriDto: UpdateAntecedentesNutriDto) {
    return `This action updates a #${id} antecedentesNutri`;
  }

  remove(id: number) {
    return `This action removes a #${id} antecedentesNutri`;
  }
}
