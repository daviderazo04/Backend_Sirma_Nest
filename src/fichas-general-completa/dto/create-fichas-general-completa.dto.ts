import { IsString, IsDateString, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateFichasGeneralCompletaDto {
  @IsNotEmpty()
  @IsString()
  @Length(10, 10, { message: 'La cédula debe tener exactamente 10 caracteres.' })
  cedula: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 6, { message: 'El ID de ficha debe tener entre 1 y 6 caracteres.' })
  idFichaNueva: string;

  @IsNotEmpty()
  @IsDateString()
  fechaPrimerContacto: string; // Se recomienda usar 'string' aquí y convertir a Date en el servicio si fuera necesario

  @IsNotEmpty()
  @IsString()
  @Length(1, 13, { message: 'El estado general debe tener entre 1 y 13 caracteres.' })
  estadoGeneral: string;

  @IsOptional()
  @IsString()
  observaciones: string;
}