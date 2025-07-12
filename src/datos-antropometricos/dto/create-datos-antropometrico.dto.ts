import { IsNumber, IsOptional, IsString, IsInt, IsNotEmpty, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDatosantropometricosDto {
  // idnutricion es la clave primaria y foránea, debe existir en Nutricion
  @IsNotEmpty({ message: 'El ID de Nutrición es obligatorio.' })
  @IsInt({ message: 'El ID de Nutrición debe ser un número entero.' })
  @Type(() => Number)
  idnutricion: number;

  @IsOptional()
  @IsString({ message: 'DA_IMC debe ser una cadena de texto.' })
  daImc?: string;

  @IsOptional()
  @IsInt({ message: 'DA_CINTURA debe ser un número entero.' })
  @Min(0, { message: 'DA_CINTURA debe ser un número positivo.' })
  @Type(() => Number)
  daCintura?: number;

  @IsOptional()
  @IsInt({ message: 'DA_CADERA debe ser un número entero.' })
  @Min(0, { message: 'DA_CADERA debe ser un número positivo.' })
  @Type(() => Number)
  daCadera?: number;

  @IsOptional()
  @IsInt({ message: 'DA_PANTORRILLA debe ser un número entero.' })
  @Min(0, { message: 'DA_PANTORRILLA debe ser un número positivo.' })
  @Type(() => Number)
  daPantorrilla?: number;

  @IsOptional()
  @IsInt({ message: 'DA_BRAZO debe ser un número entero.' })
  @Min(0, { message: 'DA_BRAZO debe ser un número positivo.' })
  @Type(() => Number)
  daBrazo?: number;

  @IsOptional()
  @IsString({ message: 'DA_TALLA debe ser una cadena de texto.' })
  daTalla?: string;

  @IsOptional()
  @IsString({ message: 'DA_PESO debe ser una cadena de texto.' })
  daPeso?: string;
}