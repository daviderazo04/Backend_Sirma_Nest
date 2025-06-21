import { PartialType } from '@nestjs/swagger';
import { CreateEquilibrioEstaticoDto } from './create-equilibrio-estatico.dto';

export class UpdateEquilibrioEstaticoDto extends PartialType(
  CreateEquilibrioEstaticoDto,
) {}
