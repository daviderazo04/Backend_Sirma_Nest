// src/antecedentes-familiares/dto/create-antecedentes-familiare.dto.ts // Note the file name change to match
import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateAntecedentesFamiliareNestedDto { // Corrected DTO class name

  @IsOptional()
  @IsBoolean()
  afCardiopatias?: boolean;

  @IsOptional()
  @IsBoolean()
  afDiabetes?: boolean;

  @IsOptional()
  @IsBoolean()
  afHipertension?: boolean;

  @IsOptional()
  @IsBoolean()
  afNeoplasia?: boolean;

  @IsOptional()
  @IsBoolean()
  afAlzheimer?: boolean;

  @IsOptional()
  @IsBoolean()
  afParkinson?: boolean;

  @IsOptional()
  @IsBoolean()
  afTuberculosis?: boolean;

  @IsOptional()
  @IsBoolean()
  afViolenciaintra?: boolean;

  @IsOptional()
  @IsBoolean()
  afSindromecuidador?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  afObservaciones?: string;
}