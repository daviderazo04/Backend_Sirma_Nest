// src/dolor-fisio/dto/create-dolor-fisio.dto.ts
import { IsNumber, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateDolorFisioDto {
  /**
   * ID of the associated Fisioterapia record.
   * This field is a foreign key.
   */
  @IsNotEmpty()
  @IsNumber()
  idfisioterapia: number;

  /**
   * ID of the associated Zonadolor record.
   * This field is a foreign key.
   */
  @IsNotEmpty()
  @IsNumber()
  idzona: number;

  /**
   * Indicates if the zone causes pain (true/false).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  zonaDuele?: boolean;
}