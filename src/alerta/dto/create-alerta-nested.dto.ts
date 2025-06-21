import { IsNumber, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateAlertaNestedDto {
  @IsOptional()
  @IsBoolean()
  alertCaida?: boolean;

  @IsOptional()
  @IsBoolean()
  alertDismovilidad?: boolean;

  @IsOptional()
  @IsBoolean()
  alertAstenia?: boolean;

  @IsOptional()
  @IsBoolean()
  alertDesorientacion?: boolean;

  @IsOptional()
  @IsBoolean()
  alertComportamiento?: boolean;
}
