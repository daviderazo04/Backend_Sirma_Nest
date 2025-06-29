import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCognitivoDto {
  @IsInt()
  @IsNotEmpty()
  idenfermeria: number;

  @IsInt()
  cogSabeFecha: number;

  @IsInt()
  cogAprendeDeTres: number;

  @IsInt()
  cogRepiteAlreves: number;

  @IsInt()
  cogTomaDoblaColoca: number;

  @IsInt()
  cogRepitePalabras: number;

  @IsInt()
  cogCopiaCirculos: number;

  @IsInt()
  cogTotal: number;
}
