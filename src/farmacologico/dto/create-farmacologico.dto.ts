// src/farmacologico/dto/create-farmacologico.dto.ts
import {
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreateFarmacologicoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the pharmacological data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if the patient uses NSAIDs (AINEs).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farAines?: boolean;

  /**
   * Indicates if the patient uses analgesics.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farAnalgesicos?: boolean;

  /**
   * Details about antidiabetic medications (e.g., 'Insulin', 'Metformin').
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  farAntidiabeticos?: string;

  /**
   * Indicates if the patient uses antihypertensives.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farAntihipertensivos?: boolean;

  /**
   * Indicates if the patient uses anticoagulants.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farAnticoagulantes?: boolean;

  /**
   * Indicates if the patient uses psychotropic drugs.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farPsicofarmacos?: boolean;

  /**
   * Indicates if the patient uses antibiotics.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farAntibioticos?: boolean;

  /**
   * Indicates if the patient has known drug allergies.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farAlergias?: boolean;

  /**
   * Indicates if the patient experiences adverse drug effects.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farEfectosadversos?: boolean;

  /**
   * Indicates if the patient is a poly-prescriber (receives prescriptions from many doctors).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farPoliprescriptor?: boolean;

  /**
   * Indicates if the patient is on polypharmacy (uses multiple medications).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farPolifarmacia?: boolean;

  /**
   * Indicates if there are other pharmacological considerations.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  farOtros?: boolean;

  /**
   * Observations related to pharmacological history.
   * Optional string field with a maximum length of 2000 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  farObservaciones?: string;
}
