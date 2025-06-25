// src/fisioterapia/dto/create-fisioterapia.dto.ts
import { IsNumber, IsOptional, IsString, Length, IsNotEmpty, Min, Max } from 'class-validator';
import { Type } from 'class-transformer'; // Will be useful for nested DTOs later

export class CreateFisioterapiaDto {
  /**
   * The ID of the associated Paciente record.
   * This is a mandatory field to link the physiotherapy record.
   */
  @IsNotEmpty()
  @IsString()
  @Length(1, 6)
  idficha: string;

  /**
   * Name of the physiotherapist/interviewer.
   * Optional string field.
   */
  @IsOptional()
  @IsString()
  @Length(1, 50)
  fisNombreencuestador?: string;

  /**
   * Current physiotherapy problems.
   * Optional text field.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000) // Assuming a reasonable max length for text
  fisProblemasactual?: string;

  /**
   * Assessment of gait (marcha).
   * Optional string field with a maximum length of 15 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 15)
  fisMarcha?: string;

  /**
   * Assessment of patient transfer (traslado).
   * Optional string field with a maximum length of 30 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 30)
  fisTraslado?: string;

  /**
   * Pain level (0-10 scale, for example).
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10) // Assuming a scale like 0 to 10
  fisDolor?: number;

  /**
   * Patient's weight.
   * Optional number field (decimal precision).
   */
  @IsOptional()
  @IsNumber()
  fisPeso?: number;

  /**
   * Patient's height.
   * Optional number field (decimal precision).
   */
  @IsOptional()
  @IsNumber()
  fisTalla?: number;

  /**
   * Indicates level of disability.
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100) // Assuming a percentage or index
  fisDiscapacidad?: number;
}