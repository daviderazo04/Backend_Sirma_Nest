import { PartialType } from '@nestjs/swagger';
import { CreateExamenRegionalDto } from './create-examen-regional.dto';

export class UpdateExamenRegionalDto extends PartialType(CreateExamenRegionalDto) {}
