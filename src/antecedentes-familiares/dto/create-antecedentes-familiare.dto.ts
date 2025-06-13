// src/antecedentes-familiares/dto/create-antecedentes-familiare.dto.ts // Note the file name change to match
import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateAntecedentesFamiliareDto { // Corrected DTO class name
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the family history data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if there's a family history of heart disease (cardiopatías).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afCardiopatias?: boolean;

  /**
   * Indicates if there's a family history of diabetes.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afDiabetes?: boolean;

  /**
   * Indicates if there's a family history of hypertension.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afHipertension?: boolean;

  /**
   * Indicates if there's a family history of neoplasia (cancer).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afNeoplasia?: boolean;

  /**
   * Indicates if there's a family history of Alzheimer's.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afAlzheimer?: boolean;

  /**
   * Indicates if there's a family history of Parkinson's.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afParkinson?: boolean;

  /**
   * Indicates if there's a family history of tuberculosis.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afTuberculosis?: boolean;

  /**
   * Indicates if there's a family history of intrafamily violence.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afViolenciaintra?: boolean;

  /**
   * Indicates if there's a family history related to caregiver syndrome.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  afSindromecuidador?: boolean;

  /**
   * Observations related to family history.
   * Optional string field with a maximum length of 2000 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  afObservaciones?: string;
}