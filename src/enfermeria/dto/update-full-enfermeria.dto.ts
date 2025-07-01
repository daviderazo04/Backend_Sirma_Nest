import {
  IsString,
  IsOptional,
  Length,
  ValidateNested,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

// Importa tus DTOs anidados (ajusta las rutas según tu estructura)
import { CreateActBasicaNestedDto } from '../../act-basicas/dto/create-act-basica-nested.dto';
import { CreateActInstrumentalNestedDto } from '../../act-instrumental/dto/create-act-instrumental-nested.dto';
import { CreateCognitivoNestedDto } from '../../cognitivo/dto/create-cognitivo-nested.dto';
import { CreateDepresionNestedDto } from '../../depresion/dto/create-depresion-nested.dto';
import { CreateOtrosRiesgoNestedDto } from '../../otros-riesgos/dto/create-otros-riesgo-nested.dto';
import { CreateRecursoSocialNestedDto } from '../../recurso-social/dto/create-recurso-social-nested.dto';
import { CreateTamizajeNestedDto } from '../../tamizaje/dto/create-tamizaje-nested.dto';

export class UpdateFullEnfermeriaDto {
  // Campos principales de la entidad Enfermeria (todos opcionales para update)
  @IsOptional()
  @IsInt()
  idficha?: number;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  enfNombreencuestador?: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  enfObservaciones?: string;

  // DTOs anidados para relaciones uno a uno
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateActBasicaNestedDto)
  actbasica?: CreateActBasicaNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateActInstrumentalNestedDto)
  actinstrumental?: CreateActInstrumentalNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCognitivoNestedDto)
  cognitivo?: CreateCognitivoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDepresionNestedDto)
  depresion?: CreateDepresionNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateOtrosRiesgoNestedDto)
  otrosriesgos?: CreateOtrosRiesgoNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateRecursoSocialNestedDto)
  recursosocial?: CreateRecursoSocialNestedDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateTamizajeNestedDto)
  tamizaje?: CreateTamizajeNestedDto;
}
