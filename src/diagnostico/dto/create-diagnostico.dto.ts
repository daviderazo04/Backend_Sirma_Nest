// src/diagnostico/dto/create-diagnostico.dto.ts
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreateDiagnosticoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the diagnosis data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * The actual diagnosis text.
   * Optional string field with a maximum length of 2000 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  diagDiagnostico?: string;

  /**
   * Presumptive or definitive diagnosis.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  diagPresundefini?: string;

  /**
   * International Classification of Diseases (CIE) code.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  diagCie?: string;

  /**
   * Clinical or syndromic diagnosis.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  diagClinicocindromico?: string;
}
