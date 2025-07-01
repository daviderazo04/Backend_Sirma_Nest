import { IsOptional, IsInt } from 'class-validator';

export class CreateOtrosRiesgoNestedDto {
  @IsOptional()
  @IsInt()
  orGrupoEdad?: number;

  @IsOptional()
  @IsInt()
  orViveCon?: number;

  @IsOptional()
  @IsInt()
  orMovilidad?: number;

  @IsOptional()
  @IsInt()
  orEnfermedadAguda?: number;

  @IsOptional()
  @IsInt()
  orNeuropsico?: number;

  @IsOptional()
  @IsInt()
  orTotal?: number;
}
