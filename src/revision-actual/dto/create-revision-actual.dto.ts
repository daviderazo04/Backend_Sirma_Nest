import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateRevisionActualDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the revision actual data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if vision is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactVision?: boolean;

  /**
   * Indicates if audition is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactAudicion?: boolean;

  /**
   * Indicates if olfaction/taste is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactOlfatogusto?: boolean;

  /**
   * Indicates if the respiratory system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactRespiratorio?: boolean;

  /**
   * Indicates if the cardiovascular system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactCardiovascular?: boolean;

  /**
   * Indicates if the digestive system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactDigestivo?: boolean;

  /**
   * Indicates if the genital system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactGenital?: boolean;

  /**
   * Indicates if the urinary system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactUrinario?: boolean;

  /**
   * Indicates if the musculoskeletal system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactMusculoesqueletico?: boolean;

  /**
   * Indicates if the endocrine system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactEndocrino?: boolean;

  /**
   * Indicates if the hemolymphatic system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactHemolinf?: boolean;

  /**
   * Indicates if the nervous system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactNervioso?: boolean;

  /**
   * Indicates if the metabolic system is applicable/relevant for the revision.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  revactMetabolico?: boolean;

  /**
   * General observations related to the revision actual.
   * Optional string field with a maximum length of 2000 characters.
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000) // Assuming a reasonable length for text observations
  revactObservaciones?: string;
}