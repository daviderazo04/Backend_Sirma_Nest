import { IsInt, IsOptional } from 'class-validator';

export class CreateTamizajeNestedDto {
  @IsOptional()
  @IsInt()
  tamDifvisual?: number;

  @IsOptional()
  @IsInt()
  tamDifauditiva?: number;

  @IsOptional()
  @IsInt()
  tamLevanteanda?: number;

  @IsOptional()
  @IsInt()
  tamPerdidaorina?: number;

  @IsOptional()
  @IsInt()
  tamPerdidapeso?: number;

  @IsOptional()
  @IsInt()
  tamPerdidamemoria?: number;

  @IsOptional()
  @IsInt()
  tamTristedeprimido?: number;

  @IsOptional()
  @IsInt()
  tamBanarsolo?: number;

  @IsOptional()
  @IsInt()
  tamComprasolo?: number;

  @IsOptional()
  @IsInt()
  tamVivesolo?: number;

  @IsOptional()
  @IsInt()
  tamTotal?: number;
}
