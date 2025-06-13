// src/ginecologico/dto/create-ginecologico.dto.ts
import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateGinecologicoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the gynecological data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Age at menopause.
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0) // Assuming age can't be negative
  @Max(120) // Assuming a reasonable max age for menopause
  ginEdadmenopausia?: number;

  /**
   * Age at last mammography.
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(120) // Assuming a reasonable max age
  ginEdadultmamografia?: number;

  /**
   * Age at last cytology (Pap test).
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(120) // Assuming a reasonable max age
  ginEdadultcitologia?: number;

  /**
   * Number of pregnancies.
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0) // Cannot be negative
  ginCantembarazos?: number;

  /**
   * Number of deliveries.
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  ginCantpartos?: number;

  /**
   * Number of C-sections.
   * Optional number field.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  ginCantcesareas?: number;

  /**
   * Indicates if the patient is undergoing hormonal therapy.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  ginTerapiahormonal?: boolean;

  /**
   * Observations related to gynecological history.
   * Optional string field with a maximum length of 2000 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  ginObservaciones?: string;
}