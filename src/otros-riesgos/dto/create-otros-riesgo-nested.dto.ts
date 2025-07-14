import { IsOptional, IsInt } from 'class-validator';

export class CreateOtrosRiesgoNestedDto {
  @IsOptional()
  @IsInt()
  orGrupoedad?: number;

  @IsOptional()
  @IsInt()
  orVivecon?: number;

  @IsOptional()
  @IsInt()
  orMovilidad?: number;

  @IsOptional()
  @IsInt()
  orEnfermedadaguda?: number;

  @IsOptional()
  @IsInt()
  orNeuropsico?: number;

  @IsOptional()
  @IsInt()
  orTotal?: number;
}
