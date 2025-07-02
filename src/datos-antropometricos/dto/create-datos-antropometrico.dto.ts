// src/datosantropometricos/dto/create-datosantropometricos.dto.ts

import { IsNumber, IsOptional, IsString, IsInt, IsNotEmpty, IsDecimal, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDatosantropometricosDto {
  // idnutricion es la clave primaria y foránea, debe existir en Nutricion
  @IsNotEmpty({ message: 'El ID de Nutrición es obligatorio.' })
  @IsInt({ message: 'El ID de Nutrición debe ser un número entero.' })
  @Type(() => Number) // Asegura que el valor se transforme a número
  idnutricion: number;

  @IsOptional()
  @IsString({ message: 'DA_IMC debe ser una cadena de texto.' })
  // @IsDecimal({ decimal_digits: '0,2', force_decimal: false }, { message: 'DA_IMC debe ser un número decimal con hasta dos cifras decimales.' })
  // La validación de decimales en string puede ser compleja. La base de datos se encargará de la precisión.
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
}
