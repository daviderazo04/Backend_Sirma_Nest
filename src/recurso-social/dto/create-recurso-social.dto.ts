import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRecursoSocialDto {
  @IsInt()
  @IsNotEmpty()
  idenfermeria: number;

  @IsInt()
  rsViveCon: number;

  @IsInt()
  rsContactoSocial: number;

  @IsInt()
  rsApoyoRedes: number;

  @IsInt()
  rsTotal: number;
}
