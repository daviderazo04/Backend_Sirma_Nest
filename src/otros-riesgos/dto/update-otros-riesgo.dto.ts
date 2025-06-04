import { PartialType } from '@nestjs/swagger';
import { CreateOtrosRiesgoDto } from './create-otros-riesgo.dto';

export class UpdateOtrosRiesgoDto extends PartialType(CreateOtrosRiesgoDto) {}
