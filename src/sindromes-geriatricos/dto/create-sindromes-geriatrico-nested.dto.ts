// src/sindromes-geriatricos/dto/create-sindromes-geriatrico.dto.ts
import { IsNumber, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateSindromesGeriatricoNestedDto {
  @IsOptional()
  @IsBoolean()
  sgFragilidad?: boolean;

  @IsOptional()
  @IsBoolean()
  sgDismovilidad?: boolean;

  @IsOptional()
  @IsBoolean()
  sgDepresion?: boolean;

  @IsOptional()
  @IsBoolean()
  sgCaida?: boolean;

  @IsOptional()
  @IsBoolean()
  sgDelirio?: boolean;

  @IsOptional()
  @IsBoolean()
  sgMalnutricion?: boolean;

  @IsOptional()
  @IsBoolean()
  sgUlceraspresion?: boolean;

  @IsOptional()
  @IsBoolean()
  sgDemencia?: boolean;

  @IsOptional()
  @IsBoolean()
  sgIncontinencia?: boolean;

  @IsOptional()
  @IsBoolean()
  sgIatrogenia?: boolean;
}
