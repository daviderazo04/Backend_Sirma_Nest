// src/equilibrio-dinamico/dto/create-equilibrio-dinamico.dto.ts
import { IsNumber, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateEquilibrioDinamicoDto {
  /**
   * ID of the associated Fisioterapia record.
   * This field serves as both the primary key and foreign key.
   */
  @IsNotEmpty()
  @IsNumber()
  idfisioterapia: number;

  /**
   * Ability to stand up without assistance.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  edLevantarse?: boolean;

  /**
   * Ability to maintain continuous gait.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  edPasocontinuo?: boolean;

  /**
   * Assessment of step length.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  edLongpaso?: boolean;

  /**
   * Ability to lift feet adequately during step.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  edPasoelevado?: boolean;

  /**
   * Assessment of trunk rotation during gait.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  edRotaciontronco?: boolean;

  /**
   * Assessment of final step stability.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  edPasofinal?: boolean;
}