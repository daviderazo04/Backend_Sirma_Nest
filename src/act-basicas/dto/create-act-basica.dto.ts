// src/actbasicas/dto/create-actbasicas.dto.ts

import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateActBasicasDto {
  @IsInt()
  @IsNotEmpty()
  idenfermeria: number;

  @IsOptional()
  @IsString()
  abBanasolo?: string;

  @IsOptional()
  @IsString()
  abVistedesvistesolo?: string;

  @IsOptional()
  @IsString()
  abCuidaapariencia?: string;

  @IsOptional()
  @IsString()
  abUsainodoro?: string;

  @IsOptional()
  @IsString()
  abControlesfinteres?: string;

  @IsOptional()
  @IsString()
  abTrasacuestalevanta?: string;

  @IsOptional()
  @IsString()
  abCamina?: string;

  @IsOptional()
  @IsString()
  abAlimenta?: string;

  @IsOptional()
  @IsInt()
  abTotal?: number;
}
