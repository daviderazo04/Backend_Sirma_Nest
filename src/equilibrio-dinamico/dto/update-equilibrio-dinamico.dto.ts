import { PartialType } from '@nestjs/swagger';
import { CreateEquilibrioDinamicoDto } from './create-equilibrio-dinamico.dto';

export class UpdateEquilibrioDinamicoDto extends PartialType(CreateEquilibrioDinamicoDto) {}
