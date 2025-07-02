// src/evaluacion/dto/create-evaluacion.dto.ts

import { IsNumber, IsOptional, IsString, IsDecimal, IsInt, IsEnum, Min, Max, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

// Si necesitas un DTO para actualizar, puedes extender este:
// import { PartialType } from '@nestjs/mapped-types';
// export class UpdateEvaluacionDto extends PartialType(CreateEvaluacionDto) {}

export class CreateEvaluacionDto {
  // idnutricion se espera que venga del cuerpo de la solicitud o de un parámetro,
  // dependiendo de cómo manejes la relación con Nutricion.
  // Si Nutricion es el padre y Evaluacion se crea a través de Nutricion,
  // idnutricion podría ser un @Param en el controlador de Nutricion,
  // o si se crea directamente, podría ser parte del DTO.
  // Asumimos que es un campo requerido para la creación de Evaluacion.
  @IsNotEmpty({ message: 'El ID de Nutrición es obligatorio.' })
  @IsInt({ message: 'El ID de Nutrición debe ser un número entero.' })
  @Min(1, { message: 'El ID de Nutrición debe ser un número positivo.' })
  @Type(() => Number) // Asegura que el valor se transforme a número
  idnutricion: number;

  @IsOptional()
  @IsInt({ message: 'EVA_VIVEDOMICILIO debe ser un número entero.' })
  @Min(0, { message: 'EVA_VIVEDOMICILIO debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_VIVEDOMICILIO debe ser 0 o 1.' })
  @Type(() => Number)
  evaVivedomicilio?: number;

  @IsOptional()
  @IsInt({ message: 'EVA_MASTRESMEDICINAS debe ser un número entero.' })
  @Min(0, { message: 'EVA_MASTRESMEDICINAS debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_MASTRESMEDICINAS debe ser 0 o 1.' })
  @Type(() => Number)
  evaMastresmedicinas?: number;

  @IsOptional()
  @IsInt({ message: 'EVA_ULCERALESIONCUTANEA debe ser un número entero.' })
  @Min(0, { message: 'EVA_ULCERALESIONCUTANEA debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_ULCERALESIONCUTANEA debe ser 0 o 1.' })
  @Type(() => Number)
  evaUlceralesioncutanea?: number;

  @IsOptional()
  @IsInt({ message: 'EVA_COMIDACOMPLETA debe ser un número entero.' })
  @Min(0, { message: 'EVA_COMIDACOMPLETA debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_COMIDACOMPLETA debe ser 0 o 1.' })
  @Type(() => Number)
  evaComidacompleta?: number;

  @IsOptional()
  @IsString({ message: 'EVA_CONSUMEPACIENTE debe ser una cadena de texto.' })
  // Puedes usar @IsNumber y @Type(() => Number) si prefieres manejarlo como número directamente
  // y luego convertirlo a string al guardar si la base de datos lo requiere como decimal string.
  // O usar @IsDecimal si necesitas una validación más específica para decimales en string.
  // @IsDecimal({ decimal_digits: '1', force_decimal: false }, { message: 'EVA_CONSUMEPACIENTE debe ser un número decimal con una cifra.' })
  evaConsumepaciente?: string;

  @IsOptional()
  @IsInt({ message: 'EVA_FRUTAVERDURA debe ser un número entero.' })
  @Min(0, { message: 'EVA_FRUTAVERDURA debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_FRUTAVERDURA debe ser 0 o 1.' })
  @Type(() => Number)
  evaFrutaverdura?: number;

  @IsOptional()
  @IsString({ message: 'EVA_VASOSAGUA debe ser una cadena de texto.' })
  // @IsDecimal({ decimal_digits: '1', force_decimal: false }, { message: 'EVA_VASOSAGUA debe ser un número decimal con una cifra.' })
  evaVasosagua?: string;

  @IsOptional()
  @IsInt({ message: 'EVA_FORMAALIMENTO debe ser un número entero.' })
  @Min(0, { message: 'EVA_FORMAALIMENTO debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_FORMAALIMENTO debe ser 0 o 1.' })
  @Type(() => Number)
  evaFormaalimento?: number;

  @IsOptional()
  @IsInt({ message: 'EVA_BIENNUTRIDO debe ser un número entero.' })
  @Min(0, { message: 'EVA_BIENNUTRIDO debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_BIENNUTRIDO debe ser 0 o 1.' })
  @Type(() => Number)
  evaBiennutrido?: number;

  @IsOptional()
  @IsString({ message: 'EVA_ESTADOSALUD debe ser una cadena de texto.' })
  // @IsDecimal({ decimal_digits: '1', force_decimal: false }, { message: 'EVA_ESTADOSALUD debe ser un número decimal con una cifra.' })
  evaEstadosalud?: string;

  @IsOptional()
  @IsString({ message: 'EVA_CIRCUNBRAQUIAL debe ser una cadena de texto.' })
  // @IsDecimal({ decimal_digits: '1', force_decimal: false }, { message: 'EVA_CIRCUNBRAQUIAL debe ser un número decimal con una cifra.' })
  evaCircunbraquial?: string;

  @IsOptional()
  @IsInt({ message: 'EVA_CIRCUNPANTORRILLA debe ser un número entero.' })
  @Min(0, { message: 'EVA_CIRCUNPANTORRILLA debe ser 0 o 1.' })
  @Max(1, { message: 'EVA_CIRCUNPANTORRILLA debe ser 0 o 1.' })
  @Type(() => Number)
  evaCircunpantorrilla?: number;

  @IsOptional()
  @IsInt({ message: 'EVA_TOTAL debe ser un número entero.' })
  @Min(0, { message: 'EVA_TOTAL debe ser un número positivo.' })
  @Type(() => Number)
  evaTotal?: number;
}
