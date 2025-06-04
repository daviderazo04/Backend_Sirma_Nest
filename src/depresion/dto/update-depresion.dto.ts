import { PartialType } from '@nestjs/swagger';
import { CreateDepresionDto } from './create-depresion.dto';

export class UpdateDepresionDto extends PartialType(CreateDepresionDto) {}
