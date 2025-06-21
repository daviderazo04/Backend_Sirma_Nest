import { PartialType } from '@nestjs/swagger';
import { CreateExamenSistemicoDto } from './create-examen-sistemico.dto';

export class UpdateExamenSistemicoDto extends PartialType(
  CreateExamenSistemicoDto,
) {}
