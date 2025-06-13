// src/examen-sistemico/dto/create-examen-sistemico.dto.ts
import { IsNumber, IsOptional, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateExamenSistemicoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the systemic exam data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Assessment of sensory organs.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsOrgsentidos?: string;

  /**
   * Assessment of the respiratory system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsRespiratorio?: string;

  /**
   * Assessment of the cardiovascular system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsCardiovascular?: string;

  /**
   * Assessment of the digestive system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsDigestivo?: string;

  /**
   * Assessment of the genitourinary system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsGenitourinario?: string;

  /**
   * Assessment of the musculoskeletal system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsMusculoesqueletico?: string;

  /**
   * Assessment of the endocrine system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsEndocrino?: string;

  /**
   * Assessment of the hemolymphatic system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsHemolinfatico?: string;

  /**
   * Assessment of the neurological system.
   * Optional string field with a maximum length of 10 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsNeurologico?: string;
}