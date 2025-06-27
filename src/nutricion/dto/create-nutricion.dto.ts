import { IsString, IsOptional, IsNumber, IsDecimal, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNutricionDto {
  @ApiProperty({
    description: 'ID de la ficha del paciente, es un campo obligatorio.',
    example: 'FICHA01',
    maxLength: 6,
  })
  @IsString()
  @IsNotEmpty()
  idficha: string;

  @ApiProperty({
    description: 'Nombre del encuestador nutricional, opcional.',
    example: 'Juan Perez',
    maxLength: 50,
    required: false,
  })
  @IsOptional()
  @IsString()
  nutNombreencuestador?: string;

  @ApiProperty({
    description: 'Evaluación global nutricional (formato decimal), opcional.',
    example: '2.5',
    pattern: '^\\d{1,2}\\.\\d{1}$', // Permite hasta 2 dígitos antes del punto y 1 después
    required: false,
  })
  @IsOptional()
  @IsString() // TypeORM lo maneja como string para decimales en este caso
  nutEvalglobal?: string;

  @ApiProperty({
    description: 'Estado nutricional, valor numérico entero, opcional.',
    example: 1, // Ejemplo: 1 para normal, 2 para desnutrición, etc.
    minimum: 0,
    maximum: 32767, // smallint range
    required: false,
  })
  @IsOptional()
  @IsNumber()
  nutEstadonutricional?: number;
}