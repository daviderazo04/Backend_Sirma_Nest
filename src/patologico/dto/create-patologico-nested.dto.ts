import {
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreatePatologicoNestedDto {
  @IsOptional()
  @IsBoolean()
  patoDermatologico?: boolean;

  @IsOptional()
  @IsBoolean()
  patoVisuales?: boolean;

  @IsOptional()
  @IsBoolean()
  patoOtorrino?: boolean;

  @IsOptional()
  @IsBoolean()
  patoEstomatologicos?: boolean;

  @IsOptional()
  @IsBoolean()
  patoEndocrinos?: boolean;

  @IsOptional()
  @IsBoolean()
  patoCardiovasculares?: boolean;

  @IsOptional()
  @IsBoolean()
  patoRespiratorio?: boolean;

  @IsOptional()
  @IsBoolean()
  patoDigestivo?: boolean;

  @IsOptional()
  @IsBoolean()
  patoNeurologico?: boolean;

  @IsOptional()
  @IsBoolean()
  patoUrologico?: boolean;

  @IsOptional()
  @IsBoolean()
  patoHemolinfatico?: boolean;

  @IsOptional()
  @IsBoolean()
  patoInfeccioso?: boolean;

  @IsOptional()
  @IsBoolean()
  patoOncologico?: boolean;

  @IsOptional()
  @IsBoolean()
  patoMusculoesqueletico?: boolean;

  @IsOptional()
  @IsBoolean()
  patoPsiquiatrico?: boolean;

  @IsOptional()
  @IsBoolean()
  patoQuirurgico?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  patoObservaciones?: string;
}
