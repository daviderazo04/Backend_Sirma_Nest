// src/fuerza/dto/create-fuerza.dto.ts
import { IsNumber, IsOptional, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateFuerzaDto {
  /**
   * ID of the associated Fisioterapia record.
   * This field serves as both the primary key and foreign key.
   */
  @IsNotEmpty()
  @IsNumber()
  idfisioterapia: number;

  /**
   * Strength score for Left Arm (e.g., manual muscle testing scale 0-5).
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5) // Common MMT scale
  fueBrazoizq?: number;

  /**
   * Strength score for Right Arm.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  fueBrazoder?: number;

  /**
   * Strength score for Left Leg.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  fuePiernaizq?: number;

  /**
   * Strength score for Right Leg.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  fuePiernader?: number;

  /**
   * Strength score for Left Trunk.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  fueTroncoizq?: number;

  /**
   * Strength score for Right Trunk.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  fueTroncoder?: number;

  /**
   * Strength score for Left Neck.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  fueCuelloizq?: number;

  /**
   * Strength score for Right Neck.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  fueCuelloder?: number;
}