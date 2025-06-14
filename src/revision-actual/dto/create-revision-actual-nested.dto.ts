// src/revision-actual/dto/create-revision-actual-nested.dto.ts
import { IsOptional, IsBoolean, IsString, Length } from 'class-validator';

export class CreateRevisionActualNestedDto {
  @IsOptional()
  @IsBoolean()
  revactVision?: boolean;

  @IsOptional()
  @IsBoolean()
  revactAudicion?: boolean;

  @IsOptional()
  @IsBoolean()
  revactOlfatogusto?: boolean;

  @IsOptional()
  @IsBoolean()
  revactRespiratorio?: boolean;

  @IsOptional()
  @IsBoolean()
  revactCardiovascular?: boolean;

  @IsOptional()
  @IsBoolean()
  revactDigestivo?: boolean;

  @IsOptional()
  @IsBoolean()
  revactGenital?: boolean;

  @IsOptional()
  @IsBoolean()
  revactUrinario?: boolean;

  @IsOptional()
  @IsBoolean()
  revactMusculoesqueletico?: boolean;

  @IsOptional()
  @IsBoolean()
  revactEndocrino?: boolean;

  @IsOptional()
  @IsBoolean()
  revactHemolinf?: boolean;

  @IsOptional()
  @IsBoolean()
  revactNervioso?: boolean;

  @IsOptional()
  @IsBoolean()
  revactMetabolico?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  revactObservaciones?: string;
}