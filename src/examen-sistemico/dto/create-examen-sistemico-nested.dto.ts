// src/examen-sistemico/dto/create-examen-sistemico.dto.ts
import { IsNumber, IsOptional, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateExamenSistemicoNestedDto {

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsOrgsentidos?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsRespiratorio?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsCardiovascular?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsDigestivo?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsGenitourinario?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsMusculoesqueletico?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsEndocrino?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsHemolinfatico?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  exsNeurologico?: string;
}