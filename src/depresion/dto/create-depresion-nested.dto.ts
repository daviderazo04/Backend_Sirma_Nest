import { IsOptional, IsInt } from 'class-validator';

export class CreateDepresionNestedDto {
  @IsOptional()
  @IsInt()
  depSatisfechovida?: number;

  @IsOptional()
  @IsInt()
  depDejaactinteres?: number;

  @IsOptional()
  @IsInt()
  depVidavacia?: number;

  @IsOptional()
  @IsInt()
  depAburrefrecuencia?: number;

  @IsOptional()
  @IsInt()
  depBuenanimo?: number;

  @IsOptional()
  @IsInt()
  depAlgomalosuceder?: number;

  @IsOptional()
  @IsInt()
  depFelizmayortiempo?: number;

  @IsOptional()
  @IsInt()
  depDesamparado?: number;

  @IsOptional()
  @IsInt()
  depActividadnueva?: number;

  @IsOptional()
  @IsInt()
  depProblemamemoria?: number;

  @IsOptional()
  @IsInt()
  depMaravillosovivir?: number;

  @IsOptional()
  @IsInt()
  depSienteinutil?: number;

  @IsOptional()
  @IsInt()
  depLlenoenergia?: number;

  @IsOptional()
  @IsInt()
  depSinesperanza?: number;

  @IsOptional()
  @IsInt()
  depOtrosmejorqueuno?: number;

  @IsOptional()
  @IsInt()
  depTotal?: number;
}
