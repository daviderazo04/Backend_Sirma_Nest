import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm'; // Importa DataSource de TypeORM
import { CreateFichasGeneralCompletaDto } from './dto/create-fichas-general-completa.dto';

@Injectable()
export class FichasGeneralCompletaService {
  constructor(
    private dataSource: DataSource, // Inyecta DataSource para interactuar con la DB
  ) {}

  async crearFichaPersona(createFichaDto: CreateFichasGeneralCompletaDto) {
    const { cedula, idFichaNueva, fechaPrimerContacto, estadoGeneral, observaciones } = createFichaDto;

    try {
      // Llamada directa al Stored Procedure usando el método query de TypeORM
      // Los parámetros se pasan como un array, manteniendo el orden definido en el SP.
      const result = await this.dataSource.query(
        `CALL sp_gestionar_ficha_persona(?, ?, ?, ?, ?)`,
        [cedula, idFichaNueva, fechaPrimerContacto, estadoGeneral, observaciones]
      );

      // El Stored Procedure devuelve un SELECT en caso de éxito.
      // El resultado de `dataSource.query` para un SP que devuelve SELECT
      // a menudo es un array de resultados, donde el primer elemento [0]
      // contiene el array de filas devueltas, y [0][0] sería la primera fila.
      if (result && result.length > 0 && result[0].length > 0) {
        return {
          message: result[0][0].Mensaje || 'Ficha creada exitosamente',
          idPersona: result[0][0].ID_Persona_Encontrada,
          idFicha: result[0][0].ID_Ficha_Creada,
        };
      } else {
        // En caso de que el SP no devuelva un SELECT explícito o la estructura sea diferente
        return { message: 'Operación completada, pero sin detalles de retorno explícitos del SP.' };
      }
    } catch (error) {
      // Manejo de errores específicos lanzados por el Stored Procedure (SIGNAL SQLSTATE '45000')
      if (error.sqlState === '45000') {
        if (error.message.includes('La persona con la cédula proporcionada no existe.')) {
          throw new NotFoundException('Error al crear la ficha: ' + error.message);
        }
        if (error.message.includes('La IDFICHA proporcionada ya existe.')) {
          throw new InternalServerErrorException('Error al crear la ficha: ' + error.message);
        }
      }
      // Captura otros errores generales de la base de datos o de la ejecución
      throw new InternalServerErrorException('Error al procesar la solicitud: ' + error.message);
    }
  }
}