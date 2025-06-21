import { IsNumber, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateAlertaDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the alert data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if there's an alert for falls.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  alertCaida?: boolean;

  /**
   * Indicates if there's an alert for reduced mobility.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  alertDismovilidad?: boolean;

  /**
   * Indicates if there's an alert for asthenia (weakness/fatigue).
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  alertAstenia?: boolean;

  /**
   * Indicates if there's an alert for disorientation.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  alertDesorientacion?: boolean;

  /**
   * Indicates if there's an alert for unusual behavior.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  alertComportamiento?: boolean;
}
