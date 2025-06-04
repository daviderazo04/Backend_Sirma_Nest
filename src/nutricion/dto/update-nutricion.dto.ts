import { PartialType } from '@nestjs/swagger';
import { CreateNutricionDto } from './create-nutricion.dto';

export class UpdateNutricionDto extends PartialType(CreateNutricionDto) {}
