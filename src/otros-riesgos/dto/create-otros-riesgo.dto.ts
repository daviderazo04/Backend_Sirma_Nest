import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateOtrosRiesgoDto {
  @IsNotEmpty()
  @IsInt()
  idenfermeria: number;

  @IsNotEmpty()
  @IsInt()
  orGrupoEdad: number;

  @IsNotEmpty()
  @IsInt()
  orViveCon: number;

  @IsNotEmpty()
  @IsInt()
  orMovilidad: number;

  @IsNotEmpty()
  @IsInt()
  orEnfermedadAguda: number;

  @IsNotEmpty()
  @IsInt()
  orNeuropsico: number;

  @IsNotEmpty()
  @IsInt()
  orTotal: number;
}
