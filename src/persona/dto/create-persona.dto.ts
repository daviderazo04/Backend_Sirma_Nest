// src/persona/dto/create-persona.dto.ts
import {
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
  Length,
  IsDecimal,
} from 'class-validator';

export class CreatePersonaDto {
  @IsOptional()
  @IsString()
  @Length(1, 10)
  perComunidad?: string;

  @IsOptional()
  @IsNumber()
  perZona?: number;

  @IsOptional()
  @IsString()
  @Length(1, 200)
  perGeorreferenciacion?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  perPrimernombre?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  perSegundonombre?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  perPrimerapellido?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  perSegundoapellido?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  perCedula?: string;

  @IsOptional()
  @IsDateString()
  perFechanacimiento?: string;

  @IsOptional()
  @IsNumber()
  perEdad?: number;

  @IsOptional()
  @IsString()
  @Length(1, 9)
  perSexo?: string;

  @IsOptional()
  @IsString()
  @Length(1, 11)
  perEstadocivil?: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  perOcupacion?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  perInstruccion?: string;

  @IsOptional()
  @IsString()
  @Length(1, 80)
  perCuidador?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  perPeso?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  perTalla?: string;

  @IsOptional()
  @IsNumber()
  perDiscapacidad?: number;
}