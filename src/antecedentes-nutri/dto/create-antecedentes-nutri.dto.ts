import { IsNumber, IsOptional, IsBoolean, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAntecedentesNutriDto {
@ApiProperty({
    description: 'ID de la nutrición a la que se asocian estos antecedentes. Es la clave primaria y foránea.',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  idnutricion: number;

  @ApiProperty({ description: 'Indica si la dieta es balanceada.', example: true, required: false })
  @IsOptional()
  @IsBoolean()
  anDietabalanceada?: boolean;

  @ApiProperty({ description: 'Indica si tiene dentales completas.', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  anDentalescompletas?: boolean;

  @ApiProperty({ description: 'Indica si tiene dificultad para masticar.', example: true, required: false })
  @IsOptional()
  @IsBoolean()
  anDificultadmasticar?: boolean;

  @ApiProperty({ description: 'Indica si tiene estreñimiento frecuente.', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  anEstrenimientofrecu?: boolean;

  @ApiProperty({ description: 'Indica si tiene diarrea frecuente.', example: true, required: false })
  @IsOptional()
  @IsBoolean()
  anDiarreafrecu?: boolean;

  @ApiProperty({ description: 'Indica si tiene alergia alimentaria.', example: false, required: false })
  @IsOptional()
  @IsBoolean()
  anAlergiaalimentaria?: boolean;

  @ApiProperty({ description: 'Descripción del desayuno.', example: 'Pan y café', maxLength: 80, required: false })
  @IsOptional()
  @IsString()
  anDesayuno?: string;

  @ApiProperty({ description: 'Descripción del almuerzo.', example: 'Arroz con pollo', maxLength: 80, required: false })
  @IsOptional()
  @IsString()
  anAlmuerzo?: string;

  @ApiProperty({ description: 'Descripción de la cena.', example: 'Sopa de verduras', maxLength: 80, required: false })
  @IsOptional()
  @IsString()
  anCena?: string;

  @ApiProperty({ description: 'Descripción de los snacks.', example: 'Frutas y yogur', maxLength: 80, required: false })
  @IsOptional()
  @IsString()
  anSnacks?: string;

  @ApiProperty({ description: 'Preferencias alimentarias.', example: 'Vegetariano', maxLength: 80, required: false })
  @IsOptional()
  @IsString()
  anPreferencias?: string;

  @ApiProperty({ description: 'Quién cocina habitualmente.', example: 'Familia', maxLength: 80, required: false })
  @IsOptional()
  @IsString()
  anQuiencocina?: string;
}