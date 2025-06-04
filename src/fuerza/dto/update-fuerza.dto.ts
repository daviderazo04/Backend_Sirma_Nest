import { PartialType } from '@nestjs/swagger';
import { CreateFuerzaDto } from './create-fuerza.dto';

export class UpdateFuerzaDto extends PartialType(CreateFuerzaDto) {}
