import { PartialType } from '@nestjs/swagger';
import { CreateActBasicasDto } from './create-act-basica.dto';

export class UpdateActBasicaDto extends PartialType(CreateActBasicasDto) {}
