// src/cribaje/dto/create-cribaje.dto.ts
import { IsInt, IsOptional, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCribajeDto {
  @ApiProperty({
    description: 'ID de la nutrición asociada a este cribaje.',
    example: 1,
    type: Number,
  })
  @IsInt()
  idnutricion: number;

  @ApiProperty({
    description: 'Indicador de pérdida de apetito (0-2).',
    example: 1,
    nullable: true,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(2)
  criPerdidaapetito?: number;

  @ApiProperty({
    description: 'Indicador de pérdida de peso (0-3).',
    example: 2,
    nullable: true,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(3)
  criPerdidapeso?: number;

  @ApiProperty({
    description: 'Indicador de movilidad (0-2).',
    example: 1,
    nullable: true,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(2)
  criMovilidad?: number;

  @ApiProperty({
    description: 'Indicador de enfermedad aguda o estrés psicológico (0-2).',
    example: 0,
    nullable: true,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(2)
  criEnfermedadaguda?: number;

  @ApiProperty({
    description: 'Indicador de problemas neuropsicológicos (0-2).',
    example: 1,
    nullable: true,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(2)
  criNeuropsico?: number;

  @ApiProperty({
    description: 'Indicador de IMC (0-3).',
    example: 3,
    nullable: true,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(3)
  criImc?: number;

  @ApiProperty({
    description: 'Puntuación total del cribaje.',
    example: 8,
    nullable: true,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @IsInt()
  criTotales?: number;
}
