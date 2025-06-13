import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateGeneralDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the general data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if all vaccines are complete.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  genVacunascompletas?: boolean;

  /**
   * Indicates if body hygiene is adequate.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  genHigienecuerpo?: boolean;

  /**
   * Indicates if health control is regular.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  genControlsalud?: boolean;

  /**
   * Indicates if oral hygiene is adequate.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  genHigieneoral?: boolean;

  /**
   * Indicates if the patient engages in recreational activities.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  genActrecreativa?: boolean;

  /**
   * Indicates if there are other healthy habits.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  genOtrossaludables?: boolean;

  /**
   * General observations related to the patient's general habits.
   * Optional string field with a maximum length of 2000 characters (adjust as needed).
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  genObservaciones?: string;
}