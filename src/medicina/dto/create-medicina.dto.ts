// src/medicina/dto/create-medicina.dto.ts
import { IsString, IsOptional, Length, IsNotEmpty } from 'class-validator';

export class CreateMedicinaDto {
  @IsNotEmpty()  // Asegurarte de que `idficha` no esté vacío si es obligatorio
  @IsString()    // `idficha` es un string
  @Length(1, 6)  // La longitud mínima de 1 y máxima de 6, según tu esquema de base de datos
  idficha: string;  // `idficha` debe ser un string, que es el ID del paciente

  @IsOptional()
  @IsString()
  @Length(1, 50)
  medNombreencuestador?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medAnamnesis?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medObservacionesrevact?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medObservacionexamenes?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medPlanintegral?: string;
}
