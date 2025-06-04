import { PartialType } from '@nestjs/swagger';
import { CreatePatologicoDto } from './create-patologico.dto';

export class UpdatePatologicoDto extends PartialType(CreatePatologicoDto) {}
