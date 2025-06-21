// src/paciente/dto/insertar-ficha-general.dto.ts
import {
  IsString,
  IsInt,
  IsDateString,
  IsNumber,
  Length,
} from 'class-validator';

export class InsertarFichaGeneralDTO {
  // --- Campos para la tabla PACIENTE ---
  @IsString()
  @Length(1, 6)
  p_IDFICHA: string;

  @IsDateString()
  p_FECHAPRIMERCONTACTO: string;

  @IsString()
  @Length(1, 13)
  p_ESTADOGENERAL: string;

  @IsString()
  p_OBSERVACIONES: string;

  // --- Campo para la tabla PERSONA_FICHA ---
  @IsInt()
  p_IDPERSONA: number;

  // --- Campos para la tabla DATOSGENERALES ---
  @IsString()
  @Length(1, 50)
  p_NOMBREENCUESTADOR: string;

  @IsNumber()
  p_PAS_ACOSTADO: number;

  @IsNumber()
  p_PAD_ACOSTADO: number;

  @IsNumber()
  p_PAS_SENTADO: number;

  @IsNumber()
  p_PAD_SENTADO: number;

  @IsString()
  p_DIAGNOSTICOHA: string;

  @IsInt()
  p_PULSOPORMIN: number;

  @IsString()
  p_DIAGNOSTICOPULSO: string;

  @IsInt()
  p_FRECRESPIRATORIA: number;

  @IsString()
  p_DIAGNOSTICOFR: string;

  @IsInt()
  p_SATURACION: number;

  @IsString()
  p_DIAGNOSTICOSATURACION: string;

  @IsNumber()
  p_TEMPERATURA: number;

  @IsString()
  p_DIAGNOSTICOTEMPERATURA: string;
}
