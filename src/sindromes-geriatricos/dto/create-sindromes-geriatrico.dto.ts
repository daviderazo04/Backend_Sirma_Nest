// src/sindromes-geriatricos/dto/create-sindromes-geriatrico.dto.ts
import { IsNumber, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateSindromesGeriatricoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the geriatric syndromes data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if the patient presents with frailty.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgFragilidad?: boolean;

  /**
   * Indicates if the patient presents with reduced mobility.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgDismovilidad?: boolean;

  /**
   * Indicates if the patient presents with depression.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgDepresion?: boolean;

  /**
   * Indicates if the patient has experienced falls.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgCaida?: boolean;

  /**
   * Indicates if the patient presents with delirium.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgDelirio?: boolean;

  /**
   * Indicates if the patient presents with malnutrition.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgMalnutricion?: boolean;

  /**
   * Indicates if the patient presents with pressure ulcers.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgUlceraspresion?: boolean;

  /**
   * Indicates if the patient presents with dementia.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgDemencia?: boolean;

  /**
   * Indicates if the patient presents with incontinence.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgIncontinencia?: boolean;

  /**
   * Indicates if the patient presents with iatrogenesis (adverse effects of medical activity).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  sgIatrogenia?: boolean;
}