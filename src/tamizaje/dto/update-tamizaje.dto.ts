import { PartialType } from '@nestjs/swagger';
import { CreateTamizajeDto } from './create-tamizaje.dto';

export class UpdateTamizajeDto extends PartialType(CreateTamizajeDto) {}
