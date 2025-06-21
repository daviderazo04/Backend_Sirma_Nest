// src/medicina/dto/create-full-medicina.dto.ts
import {
  IsString,
  IsOptional,
  Length,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

// Import all your nested DTOs (replace paths as necessary)
import { CreateAlertaNestedDto } from '../../alerta/dto/create-alerta-nested.dto';
import { CreateAndrologicoNestedDto } from '../../andrologico/dto/create-andrologico-nested.dto';
import { CreateAntecedentesFamiliareNestedDto } from '../../antecedentes-familiares/dto/create-antecedentes-familiares-nested.dto';
import { CreateDiagnosticoNestedDto } from '../../diagnostico/dto/create-diagnostico-nested.dto';
import { CreateExamenRegionalNestedDto } from '../../examen-regional/dto/create-examen-regional-nested.dto';
import { CreateExamenSistemicoNestedDto } from '../../examen-sistemico/dto/create-examen-sistemico-nested.dto';
import { CreateFarmacologicoNestedDto } from '../../farmacologico/dto/create-farmacologico-nested.dto';
import { CreateGeneralNestedDto } from '../../general/dto/create-general-nested.dto';
import { CreateGinecologicoNestedDto } from '../../ginecologico/dto/create-ginecologico-nested.dto';
import { CreateHabitoNestedDto } from '../../habitos/dto/create-habito-nested.dto';
import { CreatePatologicoNestedDto } from '../../patologico/dto/create-patologico-nested.dto';
import { CreateRevisionActualNestedDto } from '../../revision-actual/dto/create-revision-actual-nested.dto';
import { CreateSindromesGeriatricoNestedDto } from '../../sindromes-geriatricos/dto/create-sindromes-geriatrico-nested.dto';

export class CreateFullMedicinaDto {
  // Fields for the main Medicina entity (from your original CreateMedicinaDto)
  @IsNotEmpty()
  @IsString()
  @Length(1, 6)
  idficha: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  medNombreencuestador?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medAnamnesis?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medObservacionesrevact?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medObservacionexamenes?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  medPlanintegral?: string;

  // Nested DTOs for one-to-one relationships (all optional in the main request)
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAlertaNestedDto)
  alerta?: CreateAlertaNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAndrologicoNestedDto)
  andrologico?: CreateAndrologicoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAntecedentesFamiliareNestedDto)
  antecedentesfamiliares?: CreateAntecedentesFamiliareNestedDto; // Matches entity property name

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDiagnosticoNestedDto)
  diagnostico?: CreateDiagnosticoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateExamenRegionalNestedDto)
  examenregional?: CreateExamenRegionalNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateExamenSistemicoNestedDto)
  examensistemico?: CreateExamenSistemicoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateFarmacologicoNestedDto)
  farmacologico?: CreateFarmacologicoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateGeneralNestedDto)
  general?: CreateGeneralNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateGinecologicoNestedDto)
  ginecologico?: CreateGinecologicoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHabitoNestedDto)
  habitosnocivos?: CreateHabitoNestedDto; // Matches entity property name

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePatologicoNestedDto)
  patologico?: CreatePatologicoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateRevisionActualNestedDto)
  revisionactual?: CreateRevisionActualNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateSindromesGeriatricoNestedDto)
  sindromesgeriatricos?: CreateSindromesGeriatricoNestedDto;
}
