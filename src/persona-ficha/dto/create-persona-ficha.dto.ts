// src/persona-ficha/dto/create-persona-ficha.dto.ts
import {
  IsString,
  IsNumber,
  IsOptional,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreatePersonaFichaDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 6)
  idficha: string; // ID de la ficha del paciente

  @IsNotEmpty()
  @IsNumber()
  idpersona: number; // ID de la persona
}
