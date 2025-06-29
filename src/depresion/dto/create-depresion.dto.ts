import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDepresionDto {
  @IsNotEmpty()
  @IsInt()
  idenfermeria: number;

  @IsOptional()
  @IsBoolean()
  depSatisfechovida?: boolean;

  @IsOptional()
  @IsBoolean()
  depDejaactinteres?: boolean;

  @IsOptional()
  @IsBoolean()
  depVidavacia?: boolean;

  @IsOptional()
  @IsBoolean()
  depAburrefrecuencia?: boolean;

  @IsOptional()
  @IsBoolean()
  depBuenanimo?: boolean;

  @IsOptional()
  @IsBoolean()
  depAlgomalosuceder?: boolean;

  @IsOptional()
  @IsBoolean()
  depFelizmayortiempo?: boolean;

  @IsOptional()
  @IsBoolean()
  depDesamparado?: boolean;

  @IsOptional()
  @IsBoolean()
  depActividadnueva?: boolean;

  @IsOptional()
  @IsBoolean()
  depProblemamemoria?: boolean;

  @IsOptional()
  @IsBoolean()
  depMaravillosovivir?: boolean;

  @IsOptional()
  @IsBoolean()
  depSienteinutil?: boolean;

  @IsOptional()
  @IsBoolean()
  depLlenoenergia?: boolean;

  @IsOptional()
  @IsBoolean()
  depSinesperanza?: boolean;

  @IsOptional()
  @IsBoolean()
  depOtrosmejorqueuno?: boolean;

  @IsOptional()
  @IsInt()
  depTotal?: number;
}
