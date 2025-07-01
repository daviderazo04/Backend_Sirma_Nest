import { IsOptional, IsInt } from 'class-validator';

export class CreateCognitivoNestedDto {
  @IsOptional()
  @IsInt()
  cogSabeFecha?: number;

  @IsOptional()
  @IsInt()
  cogAprendeDeTres?: number;

  @IsOptional()
  @IsInt()
  cogRepiteAlreves?: number;

  @IsOptional()
  @IsInt()
  cogTomaDoblaColoca?: number;

  @IsOptional()
  @IsInt()
  cogRepitePalabras?: number;

  @IsOptional()
  @IsInt()
  cogCopiaCirculos?: number;

  @IsOptional()
  @IsInt()
  cogTotal?: number;
}
