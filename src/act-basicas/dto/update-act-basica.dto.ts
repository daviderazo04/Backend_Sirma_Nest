import { PartialType } from '@nestjs/swagger';
import { CreateActBasicaDto } from './create-act-basica.dto';

export class UpdateActBasicaDto extends PartialType(CreateActBasicaDto) {}
