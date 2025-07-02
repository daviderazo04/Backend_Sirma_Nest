import { IsString, IsDateString, IsNotEmpty, IsOptional, Length, IsNumber, Min, Max, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFichasGeneralCompletaDto {
  // Parámetros para Persona y Paciente (Ficha)
  @IsNotEmpty()
  @IsString()
  @Length(10, 10, { message: 'La cédula debe tener exactamente 10 caracteres.' })
  p_cedula: string; // Renamed from 'cedula'

  @IsNotEmpty()
  @IsString()
  @Length(1, 6, { message: 'El ID de ficha debe tener entre 1 y 6 caracteres.' })
  p_id_ficha_nueva: string; // Renamed from 'idFichaNueva'

  @IsNotEmpty()
  @IsDateString()
  p_fecha_primer_contacto: string; // Renamed from 'fechaPrimerContacto'

  @IsNotEmpty()
  @IsString()
  @Length(1, 13, { message: 'El estado general debe tener entre 1 y 13 caracteres.' })
  p_estado_general: string; // Renamed from 'estadoGeneral'

  @IsOptional()
  @IsString()
  p_observaciones: string; // Renamed from 'observaciones'

  // Parámetros para DATOSGENERALES
  @IsNotEmpty()
  @IsString()
  @Length(1, 50, { message: 'El nombre del encuestador debe tener entre 1 y 50 caracteres.' })
  p_nombre_encuestador: string; // Renamed from 'nombreEncuestador'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(999.99)
  p_pas_acostado: number; // Renamed from 'pasAcostado'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(999.99)
  p_pad_acostado: number; // Renamed from 'padAcostado'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(999.99)
  p_pas_sentado: number; // Renamed from 'pasSentado'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(999.99)
  p_pad_sentado: number; // Renamed from 'padSentado'

  @IsOptional()
  @IsString()
  p_diagnostico_ha: string; // Renamed from 'diagnosticoHa'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(32767) // SMALLINT max value
  p_pulso_por_min: number; // Renamed from 'pulsoPorMin'

  @IsOptional()
  @IsString()
  p_diagnostico_pulso: string; // Renamed from 'diagnosticoPulso'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(32767) // SMALLINT max value
  p_frec_respiratoria: number; // Renamed from 'frecRespiratoria'

  @IsOptional()
  @IsString()
  p_diagnostico_fr: string; // Renamed from 'diagnosticoFr'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(32767) // SMALLINT max value
  p_saturacion: number; // Renamed from 'saturacion'

  @IsOptional()
  @IsString()
  p_diagnostico_saturacion: string; // Renamed from 'diagnosticoSaturacion'

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(0)
  @Max(99.9) // DECIMAL(3,1) max value
  p_temperatura: number; // Renamed from 'temperatura'

  @IsOptional()
  @IsString()
  p_diagnostico_temperatura: string; // Renamed from 'diagnosticoTemperatura'

  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  p_firma_consentimiento: boolean; // Renamed from 'firmaConsentimiento'

  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  p_firma_medicina: boolean; // Renamed from 'firmaMedicina'

  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  p_firma_enfermeria: boolean; // Renamed from 'firmaEnfermeria'

  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  p_firma_nutricion: boolean; // Renamed from 'firmaNutricion'

  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  p_firma_fisioterapia: boolean; // Renamed from 'firmaFisioterapia'
}