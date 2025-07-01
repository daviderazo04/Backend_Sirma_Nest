// src/zonadolor/dto/create-zonadolor.dto.ts
import { IsOptional, IsString, Length } from 'class-validator';

export class CreateZonadolorDto {
  /**
   * Name of the pain zone (e.g., 'Cervical', 'Lumbar', 'Hombro').
   * Optional string field with max length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 80)
  zonaNombre?: string;
}