import { PartialType } from '@nestjs/swagger';
import { CreateNutricionCompletoDto } from './create-nutricioncompleto.dto';


export class UpdateNutricioncompletoDto extends PartialType(CreateNutricionCompletoDto) {}
