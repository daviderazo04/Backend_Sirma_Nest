// src/paciente/dto/create-paciente.dto.ts
import { IsString, IsOptional, IsDateString, Length } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @Length(1, 6)
  idficha: string;

  @IsOptional()
  @IsDateString()
  pacFechaprimercontacto?: string;

  @IsOptional()
  @IsString()
  @Length(1, 13)
  pacEstadogeneral?: string;

  @IsOptional()
  @IsString()
  pacObservaciones?: string;
}