import { PartialType } from '@nestjs/swagger';
import { CreateResumenNutricionalDto } from './create-resumen-nutricional.dto';

export class UpdateResumenNutricionalDto extends PartialType(CreateResumenNutricionalDto) {}
