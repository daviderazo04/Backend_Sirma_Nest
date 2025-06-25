// src/equilibrio-estatico/dto/create-equilibrio-estatico.dto.ts
import { IsNumber, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateEquilibrioEstaticoDto {
  /**
   * ID of the associated Fisioterapia record.
   * This field serves as both the primary key and foreign key.
   */
  @IsNotEmpty()
  @IsNumber()
  idfisioterapia: number;

  /**
   * Ability to maintain balance while sitting unsupported.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  eeSentadonoapoyo?: boolean;

  /**
   * Ability to maintain balance while standing unsupported.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  eeParadonoapoyo?: boolean;
}