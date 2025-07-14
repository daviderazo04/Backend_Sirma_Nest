import { IsOptional, IsInt } from 'class-validator';

export class CreateActInstrumentalNestedDto {
  @IsOptional()
  @IsInt()
  aiCuidacasa?: number;

  @IsOptional()
  @IsInt()
  aiUsatelefono?: number;

  @IsOptional()
  @IsInt()
  aiMediotransporte?: number;

  @IsOptional()
  @IsInt()
  aiPreparacomida?: number;

  @IsOptional()
  @IsInt()
  aiLavaropa?: number;

  @IsOptional()
  @IsInt()
  aiVacompras?: number;

  @IsOptional()
  @IsInt()
  aiManejadinero?: number;

  @IsOptional()
  @IsInt()
  aiManejamedicina?: number;

  @IsOptional()
  @IsInt()
  aiTotal?: number;
}
