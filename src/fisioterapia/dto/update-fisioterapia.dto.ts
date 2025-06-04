import { PartialType } from '@nestjs/swagger';
import { CreateFisioterapiaDto } from './create-fisioterapia.dto';

export class UpdateFisioterapiaDto extends PartialType(CreateFisioterapiaDto) {}
