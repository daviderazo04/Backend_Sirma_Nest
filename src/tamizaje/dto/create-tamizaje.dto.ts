import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTamizajeDto {
  @IsInt()
  @IsNotEmpty()
  idenfermeria: number;

  @IsOptional()
  @IsBoolean()
  tamDifvisual?: boolean;

  @IsOptional()
  @IsBoolean()
  tamDifauditiva?: boolean;

  @IsOptional()
  @IsBoolean()
  tamLevanteanda?: boolean;

  @IsOptional()
  @IsBoolean()
  tamPerdidaorina?: boolean;

  @IsOptional()
  @IsBoolean()
  tamPerdidapeso?: boolean;

  @IsOptional()
  @IsBoolean()
  tamPerdidamemoria?: boolean;

  @IsOptional()
  @IsBoolean()
  tamTristedeprimido?: boolean;

  @IsOptional()
  @IsBoolean()
  tamBanarsolo?: boolean;

  @IsOptional()
  @IsBoolean()
  tamComprasolo?: boolean;

  @IsOptional()
  @IsBoolean()
  tamVivesolo?: boolean;

  @IsOptional()
  @IsInt()
  tamTotal?: number;
}
