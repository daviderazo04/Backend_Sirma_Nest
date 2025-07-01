import { IsOptional, IsInt } from 'class-validator';

export class CreateActInstrumentalNestedDto {
  @IsOptional()
  @IsInt()
  aiCuidaCasa?: number;

  @IsOptional()
  @IsInt()
  aiUsaTelefono?: number;

  @IsOptional()
  @IsInt()
  aiMediosTransporte?: number;

  @IsOptional()
  @IsInt()
  aiPreparaComida?: number;

  @IsOptional()
  @IsInt()
  aiLavaRopa?: number;

  @IsOptional()
  @IsInt()
  aiVaCompras?: number;

  @IsOptional()
  @IsInt()
  aiManejaDinero?: number;

  @IsOptional()
  @IsInt()
  aiManejaMedicina?: number;

  @IsOptional()
  @IsInt()
  aiTotales?: number;
}
