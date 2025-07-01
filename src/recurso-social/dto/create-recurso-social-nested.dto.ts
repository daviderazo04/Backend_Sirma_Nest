import { IsOptional, IsInt } from 'class-validator';

export class CreateRecursoSocialNestedDto {
  @IsOptional()
  @IsInt()
  rsViveCon?: number;

  @IsOptional()
  @IsInt()
  rsContactoSocial?: number;

  @IsOptional()
  @IsInt()
  rsApoyoRedes?: number;

  @IsOptional()
  @IsInt()
  rsTotal?: number;
}
