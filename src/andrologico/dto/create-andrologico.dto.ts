// src/andrologico/dto/create-andrologico.dto.ts
import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateAndrologicoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the andrological data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Age at last antigen test (e.g., PSA).
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0) // Assuming age can't be negative
  @Max(120) // Assuming a reasonable max age
  andEdadultantigeno?: number;

  /**
   * Indicates if the patient is undergoing hormonal therapy.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  andTerapiahormonal?: boolean;

  /**
   * Observations related to andrological history.
   * Optional string field with a maximum length of 2000 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  andObservaciones?: string;
}