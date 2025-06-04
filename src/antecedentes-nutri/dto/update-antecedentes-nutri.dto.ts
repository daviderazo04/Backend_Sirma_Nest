import { PartialType } from '@nestjs/swagger';
import { CreateAntecedentesNutriDto } from './create-antecedentes-nutri.dto';

export class UpdateAntecedentesNutriDto extends PartialType(CreateAntecedentesNutriDto) {}
