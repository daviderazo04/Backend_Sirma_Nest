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
  @Length(1, 50)
  diagPresundefini?: string;

  @IsOptional()
  @IsString()
  @Length(1, 80)
  diagCie?: string;

  @IsOptional()
  @IsString()
  @Length(1, 80)
  diagClinicocindromico?: string;
}
