// src/antecedentesnutri/dto/create-antecedentesnutri.dto.ts

import { IsBoolean, IsOptional, IsString, IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAntecedentesnutriDto {
  // idnutricion es la clave primaria y foránea, debe existir en Nutricion
  @IsNotEmpty({ message: 'El ID de Nutrición es obligatorio.' })
  @IsInt({ message: 'El ID de Nutrición debe ser un número entero.' })
  @Type(() => Number) // Asegura que el valor se transforme a número
  idnutricion: number;

  @IsOptional()
  @IsBoolean({ message: 'AN_DIETABALANCEADA debe ser un valor booleano (true/false).' })
  @Type(() => Boolean) // Transforma 0/1 a boolean
  anDietabalanceada?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'AN_DENTALESCOMPLETAS debe ser un valor booleano (true/false).' })
  @Type(() => Boolean)
  anDentalescompletas?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'AN_DIFICULTADMASTICAR debe ser un valor booleano (true/false).' })
  @Type(() => Boolean)
  anDificultadmasticar?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'AN_ESTRENIMIENTOFRECU debe ser un valor booleano (true/false).' })
  @Type(() => Boolean)
  anEstrenimientofrecu?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'AN_DIARREAFRECU debe ser un valor booleano (true/false).' })
  @Type(() => Boolean)
  anDiarreafrecu?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'AN_ALERGIAALIMENTARIA debe ser un valor booleano (true/false).' })
  @Type(() => Boolean)
  anAlergiaalimentaria?: boolean;

  @IsOptional()
  @IsString({ message: 'AN_DESAYUNO debe ser una cadena de texto.' })
  @MaxLength(80, { message: 'AN_DESAYUNO no debe exceder los 80 caracteres.' })
  anDesayuno?: string;

  @IsOptional()
  @IsString({ message: 'AN_ALMUERZO debe ser una cadena de texto.' })
  @MaxLength(80, { message: 'AN_ALMUERZO no debe exceder los 80 caracteres.' })
  anAlmuerzo?: string;

  @IsOptional()
  @IsString({ message: 'AN_CENA debe ser una cadena de texto.' })
  @MaxLength(80, { message: 'AN_CENA no debe exceder los 80 caracteres.' })
  anCena?: string;

  @IsOptional()
  @IsString({ message: 'AN_SNACKS debe ser una cadena de texto.' })
  @MaxLength(80, { message: 'AN_SNACKS no debe exceder los 80 caracteres.' })
  anSnacks?: string;

  @IsOptional()
  @IsString({ message: 'AN_PREFERENCIAS debe ser una cadena de texto.' })
  @MaxLength(80, { message: 'AN_PREFERENCIAS no debe exceder los 80 caracteres.' })
  anPreferencias?: string;

  @IsOptional()
  @IsString({ message: 'AN_QUIENCOCINA debe ser una cadena de texto.' })
  @MaxLength(80, { message: 'AN_QUIENCOCINA no debe exceder los 80 caracteres.' })
  anQuiencocina?: string;
}
