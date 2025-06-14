// src/ginecologico/dto/create-ginecologico.dto.ts
import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateGinecologicoNestedDto {

  @IsOptional()
  @IsNumber()
  @Min(0) // Assuming age can't be negative
  @Max(120) // Assuming a reasonable max age for menopause
  ginEdadmenopausia?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(120) // Assuming a reasonable max age
  ginEdadultmamografia?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(120) // Assuming a reasonable max age
  ginEdadultcitologia?: number;

  @IsOptional()
  @IsNumber()
  @Min(0) // Cannot be negative
  ginCantembarazos?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  ginCantpartos?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  ginCantcesareas?: number;

  @IsOptional()
  @IsBoolean()
  ginTerapiahormonal?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  ginObservaciones?: string;
}