import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsOptional()
  userNombre?: string;

  @IsString()
  @IsOptional()
  userApellido?: string;

  @IsEmail()
  @IsOptional()
  userCorreo?: string;

  @IsString()
  @IsNotEmpty()
  userClave: string;

  @IsString()
  @IsOptional()
  userCedula?: string;

  @IsString()
  @IsOptional()
  userRol?: string;
}
