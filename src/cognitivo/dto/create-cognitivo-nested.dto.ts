import { IsOptional, IsInt } from 'class-validator';

export class CreateCognitivoNestedDto {
  @IsOptional()
  @IsInt()
  cogSabefecha?: number;

  @IsOptional()
  @IsInt()
  cogAprendetres?: number;

  @IsOptional()
  @IsInt()
  cogRepitealreves?: number;

  @IsOptional()
  @IsInt()
  cogTomadoblacoloca?: number;

  @IsOptional()
  @IsInt()
  cogRepitepalabras?: number;

  @IsOptional()
  @IsInt()
  cogCopiacirculos?: number;

  @IsOptional()
  @IsInt()
  cogTotal?: number;
}
