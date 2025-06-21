// src/diagnostico/dto/create-diagnostico.dto.ts
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreateDiagnosticoNestedDto {
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  diagDiagnostico?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  diagPresundefini?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  diagCie?: string;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  diagClinicocindromico?: string;
}
