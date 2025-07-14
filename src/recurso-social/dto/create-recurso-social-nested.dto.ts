import { IsOptional, IsInt } from 'class-validator';

export class CreateRecursoSocialNestedDto {
  @IsOptional()
  @IsInt()
  rsVivecon?: number;

  @IsOptional()
  @IsInt()
  rsContactosocial?: number;

  @IsOptional()
  @IsInt()
  rsApoyored?: number;

  @IsOptional()
  @IsInt()
  rsTotal?: number;
}
