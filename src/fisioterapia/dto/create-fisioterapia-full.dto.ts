// src/fisioterapia/dto/create-fisioterapia-full.dto.ts
import {
  IsNumber,
  IsBoolean,
  IsOptional,
  IsString,
  Length,
  IsDateString,
  IsArray,
  ValidateNested,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

// ... (otros DTOs anidados: CreateFisioterapiaTonoMuscularDto, etc. -- permanecen igual) ...

// DTO Principal para la creación completa de Fisioterapia
export class CreateFisioterapiaFullDto {
  // --- Campos de Fisioterapia principal ---
  @IsNotEmpty()
  @IsString()
  @Length(6, 6)
  idficha: string; // <-- CORRECCIÓN: 'idFicha'

  @IsOptional()
  @IsString()
  fisNombreencuestador?: string;

  @IsOptional()
  @IsString()
  fisProblemasactual?: string;

  @IsNotEmpty()
  @IsString()
  fisMarcha: string;

  @IsNotEmpty()
  @IsString()
  fisTraslado: string;

  @IsOptional()
  @IsNumber()
  fisPeso?: number;

  @IsOptional()
  @IsNumber()
  fisTalla?: number;

  @IsOptional()
  @IsNumber()
  fisDiscapacidad?: number;

  @IsOptional()
  @IsNumber()
  fisDolor?: number;

  // ... (DTOs anidados para relaciones OneToOne y OneToMany -- permanecen igual) ...
}