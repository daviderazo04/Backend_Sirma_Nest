import { PartialType } from '@nestjs/swagger';
import { CreateSeguimientoFisioterapiaDto } from './create-seguimiento-fisioterapia.dto';

export class UpdateSeguimientoFisioterapiaDto extends PartialType(CreateSeguimientoFisioterapiaDto) {}
