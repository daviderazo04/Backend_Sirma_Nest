import { PartialType } from '@nestjs/swagger';
import { CreateDatosAntropometricoDto } from './create-datos-antropometrico.dto';

export class UpdateDatosAntropometricoDto extends PartialType(
  CreateDatosAntropometricoDto,
) {}
