import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreatePatologicoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the pathological history data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if there are dermatological pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoDermatologico?: boolean;

  /**
   * Indicates if there are visual pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoVisuales?: boolean;

  /**
   * Indicates if there are ear, nose, and throat (otorrino) pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoOtorrino?: boolean;

  /**
   * Indicates if there are stomatological (oral/dental) pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoEstomatologicos?: boolean;

  /**
   * Indicates if there are endocrine pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoEndocrinos?: boolean;

  /**
   * Indicates if there are cardiovascular pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoCardiovasculares?: boolean;

  /**
   * Indicates if there are respiratory pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoRespiratorio?: boolean;

  /**
   * Indicates if there are digestive pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoDigestivo?: boolean;

  /**
   * Indicates if there are neurological pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoNeurologico?: boolean;

  /**
   * Indicates if there are urological pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoUrologico?: boolean;

  /**
   * Indicates if there are hemolymphatic pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoHemolinfatico?: boolean;

  /**
   * Indicates if there are infectious pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoInfeccioso?: boolean;

  /**
   * Indicates if there are oncological pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoOncologico?: boolean;

  /**
   * Indicates if there are musculoskeletal pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoMusculoesqueletico?: boolean;

  /**
   * Indicates if there are psychiatric pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoPsiquiatrico?: boolean;

  /**
   * Indicates if there are surgical pathological findings.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  patoQuirurgico?: boolean;

  /**
   * Observations related to pathological history.
   * Optional string field with a maximum length of 2000 characters (adjust as needed).
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  patoObservaciones?: string;
}