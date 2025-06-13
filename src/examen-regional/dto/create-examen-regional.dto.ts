// src/examen-regional/dto/create-examen-regional.dto.ts
import { IsNumber, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateExamenRegionalDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the regional exam data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if the skin (piel) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrPiel?: boolean;

  /**
   * Indicates if the head (cabeza) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrCabeza?: boolean;

  /**
   * Indicates if the eyes (ojos) were examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrOjos?: boolean;

  /**
   * Indicates if the ears (oídos) were examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrOidos?: boolean;

  /**
   * Indicates if the mouth (boca) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrBoca?: boolean;

  /**
   * Indicates if the nose (nariz) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrNariz?: boolean;

  /**
   * Indicates if the neck (cuello) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrCuello?: boolean;

  /**
   * Indicates if the axilla and breast (axila y mama) were examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrAxilamama?: boolean;

  /**
   * Indicates if the thorax (tórax) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrTorax?: boolean;

  /**
   * Indicates if the abdomen was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrAbdomen?: boolean;

  /**
   * Indicates if the spine (columna) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrColumna?: boolean;

  /**
   * Indicates if the perineum (perine) was examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrPerine?: boolean;

  /**
   * Indicates if the upper limbs (miembros superiores) were examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrMiembrossuper?: boolean;

  /**
   * Indicates if the lower limbs (miembros inferiores) were examined.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  exrMiembrosinfer?: boolean;
}