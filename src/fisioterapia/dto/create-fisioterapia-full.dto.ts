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
  idFicha: string; // <-- CORRECCIÓN: 'idFicha'

  @IsOptional()
  @IsBoolean()
  fisioterapiaEstado?: boolean;

  @IsOptional()
  @IsNumber()
  fisioterapiaNumSesion?: number;

  @IsNotEmpty()
  @IsDateString()
  fisioterapiaFecha: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 5)
  fisioterapiaHoraInicio: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 5)
  fisioterapiaHoraFin: string;

  @IsOptional()
  @IsString()
  @Length(0, 1000)
  fisioterapiaObservaciones?: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  fisioterapiaDiagnostico?: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  fisioterapiaObjetivos?: string;

  @IsOptional()
  @IsString()
  @Length(0, 500)
  fisioterapiaTratamiento?: string;

  // ... (DTOs anidados para relaciones OneToOne y OneToMany -- permanecen igual) ...
}