// src/tono-muscular/dto/create-tono-muscular.dto.ts
import { IsNumber, IsOptional, IsString, Length, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateTonoMuscularDto {
  /**
   * ID of the associated Fisioterapia record.
   * This field serves as both the primary key and foreign key.
   */
  @IsNotEmpty()
  @IsNumber()
  idfisioterapia: number;

  /**
   * Ashworth scale score for muscle tone.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5) // Ashworth scale typically ranges from 0 to 4 (or 5 for modified)
  musAshworth?: number;

  /**
   * Campbell scale score for muscle tone.
   * Optional number (smallint).
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  musCampbell?: number; // Assuming a minimum, max not specified

  /**
   * Observations related to muscle tone.
   * Optional text field.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000) // Assuming a reasonable max length for text
  musObservaciones?: string;
}