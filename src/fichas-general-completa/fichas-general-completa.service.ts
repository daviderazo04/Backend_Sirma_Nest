import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateFichasGeneralCompletaDto } from './dto/create-fichas-general-completa.dto';

@Injectable()
export class FichasGeneralCompletaService {
  constructor(
    private dataSource: DataSource,
  ) {}

  async crearFichaPersona(createFichaDto: CreateFichasGeneralCompletaDto) {
    const {
      p_cedula,
      p_id_ficha_nueva,
      p_fecha_primer_contacto,
      p_estado_general,
      p_observaciones,
      p_nombre_encuestador,
      p_pas_acostado,
      p_pad_acostado,
      p_pas_sentado,
      p_pad_sentado,
      p_diagnostico_ha,
      p_pulso_por_min,
      p_diagnostico_pulso,
      p_frec_respiratoria,
      p_diagnostico_fr,
      p_saturacion,
      p_diagnostico_saturacion,
      p_temperatura,
      p_diagnostico_temperatura,
      p_firma_consentimiento,
      p_firma_medicina,
      p_firma_enfermeria,
      p_firma_nutricion,
      p_firma_fisioterapia,
    } = createFichaDto;

    try {
      // Ensure there are 24 '?' placeholders for the 24 parameters expected by the SP.
      const result = await this.dataSource.query(
        `CALL sp_gestionar_ficha_persona2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          p_cedula,
          p_id_ficha_nueva,
          p_fecha_primer_contacto,
          p_estado_general,
          p_observaciones,
          p_nombre_encuestador,
          p_pas_acostado,
          p_pad_acostado,
          p_pas_sentado,
          p_pad_sentado,
          p_diagnostico_ha,
          p_pulso_por_min,
          p_diagnostico_pulso,
          p_frec_respiratoria,
          p_diagnostico_fr,
          p_saturacion,
          p_diagnostico_saturacion,
          p_temperatura,
          p_diagnostico_temperatura,
          p_firma_consentimiento,
          p_firma_medicina,
          p_firma_enfermeria,
          p_firma_nutricion,
          p_firma_fisioterapia,
        ]
      );

      // The stored procedure returns a SELECT statement on success.
      // TypeORM's `query` method for a SP returning SELECT often gives an array of results,
      // where the first element [0] contains the array of rows, and [0][0] is the first row.
      if (result && result.length > 0 && result[0].length > 0) {
        return {
          message: result[0][0].Mensaje || 'Operación completada exitosamente: Ficha y Datos Generales creados.',
          idPersona: result[0][0].ID_Persona,
          idFicha: result[0][0].ID_Ficha,
        };
      } else {
        // Fallback message if the SP doesn't return an explicit SELECT or the structure differs.
        return { message: 'Operación completada, pero sin detalles de retorno explícitos del SP.' };
      }
    } catch (error) {
      // Handle specific errors signaled by the Stored Procedure (SQLSTATE '45000').
      if (error.sqlState === '45000') {
        if (error.message.includes('La persona con la cédula proporcionada no existe.')) {
          throw new NotFoundException('Error al crear la ficha: ' + error.message);
        }
        if (error.message.includes('La IDFICHA proporcionada ya existe.')) {
          throw new InternalServerErrorException('Error al crear la ficha: ' + error.message);
        }
      }
      // Catch any other general database or execution errors.
      throw new InternalServerErrorException('Error al procesar la solicitud: ' + error.message);
    }
  }
}