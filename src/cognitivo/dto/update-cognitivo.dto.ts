import { PartialType } from '@nestjs/swagger';
import { CreateCognitivoDto } from './create-cognitivo.dto';

export class UpdateCognitivoDto extends PartialType(CreateCognitivoDto) {}
