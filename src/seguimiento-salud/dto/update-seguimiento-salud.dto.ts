import { PartialType } from '@nestjs/swagger';
import { CreateSeguimientoSaludDto } from './create-seguimiento-salud.dto';

export class UpdateSeguimientoSaludDto extends PartialType(
  CreateSeguimientoSaludDto,
) {}
