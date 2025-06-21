import { PartialType } from '@nestjs/swagger';
import { CreateAntecedentesFamiliareDto } from './create-antecedentes-familiare.dto';

export class UpdateAntecedentesFamiliareDto extends PartialType(
  CreateAntecedentesFamiliareDto,
) {}
