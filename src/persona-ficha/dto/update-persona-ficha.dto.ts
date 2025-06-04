// src/persona-ficha/dto/update-persona-ficha.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonaFichaDto } from './create-persona-ficha.dto';

export class UpdatePersonaFichaDto extends PartialType(CreatePersonaFichaDto) {}