// src/andrologico/dto/create-andrologico.dto.ts
import {
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  Length,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';

export class CreateAndrologicoNestedDto {
  @IsOptional()
  @IsNumber()
  @Min(0) // Assuming age can't be negative
  @Max(120) // Assuming a reasonable max age
  andEdadultantigeno?: number;

  @IsOptional()
  @IsBoolean()
  andTerapiahormonal?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  andObservaciones?: string;
}
