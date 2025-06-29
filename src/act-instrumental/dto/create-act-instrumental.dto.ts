import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateActInstrumentalDto {
  @IsInt()
  @IsNotEmpty()
  idenfermeria: number;

  @IsInt()
  aiCuidaCasa: number;

  @IsInt()
  aiUsaTelefono: number;

  @IsInt()
  aiMediosTransporte: number;

  @IsInt()
  aiPreparaComida: number;

  @IsInt()
  aiLavaRopa: number;

  @IsInt()
  aiVaCompras: number;

  @IsInt()
  aiManejaDinero: number;

  @IsInt()
  aiManejaMedicina: number;

  @IsInt()
  aiTotales: number;
}
