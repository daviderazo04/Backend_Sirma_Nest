import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';
// Elimina el siguiente import si no es necesario
// import { LegacyOracleNamingStrategy } from 'typeorm';

export class CreateEnfermeriaDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 6)
  idficha: string;
  @IsOptional()
  @IsString()
  @Length(1, 50)
  enfNombreencuestador?: string;
}
