// src/examen-regional/dto/create-examen-regional.dto.ts
import { IsNumber, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateExamenRegionalNestedDto {

  @IsOptional()
  @IsBoolean()
  exrPiel?: boolean;

  @IsOptional()
  @IsBoolean()
  exrCabeza?: boolean;

  @IsOptional()
  @IsBoolean()
  exrOjos?: boolean;

  @IsOptional()
  @IsBoolean()
  exrOidos?: boolean;

  @IsOptional()
  @IsBoolean()
  exrBoca?: boolean;

  @IsOptional()
  @IsBoolean()
  exrNariz?: boolean;

  @IsOptional()
  @IsBoolean()
  exrCuello?: boolean;

  @IsOptional()
  @IsBoolean()
  exrAxilamama?: boolean;

  @IsOptional()
  @IsBoolean()
  exrTorax?: boolean;

  @IsOptional()
  @IsBoolean()
  exrAbdomen?: boolean;

  @IsOptional()
  @IsBoolean()
  exrColumna?: boolean;

  @IsOptional()
  @IsBoolean()
  exrPerine?: boolean;

  @IsOptional()
  @IsBoolean()
  exrMiembrossuper?: boolean;

  @IsOptional()
  @IsBoolean()
  exrMiembrosinfer?: boolean;
}