import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CreateNutricionCompletoDto } from './dto/create-nutricioncompleto.dto';

@Injectable()
export class NutricioncompletoService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async crear(dto: CreateNutricionCompletoDto) {
    // ahora son 43 signos de ?
    const query = `
      CALL nutricionCompleto(?, ?, ?, ?,
                             ?, ?, ?, ?, ?, ?, ?,
                             ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                             ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                             ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      dto.idFicha, dto.nombreEncuestador, dto.evalGlobal, dto.estadoNutricional,
      dto.perdidaApetito, dto.perdidaPeso, dto.movilidad, dto.enfermedadAguda, dto.neuropsico, dto.imc,
      dto.totales, dto.viveDomicilio, dto.masTresMedicinas, dto.ulceraLesionCutanea, dto.comidaCompleta, dto.consumePaciente, dto.frutaVerdura, dto.vasosAgua,
      dto.formaAlimento, dto.bienNutrido, dto.estadoSalud, dto.circunBraquial, dto.circunPantorrilla, dto.evaTotal,
      dto.dietaBalanceada, dto.dentalesCompletas, dto.dificultadMasticar, dto.estrenimientoFrecu, dto.diarreaFrecu, dto.alergiaAlimentaria,
      dto.desayuno, dto.almuerzo, dto.cena, dto.snacks, dto.preferencias, dto.quienCocina,
      dto.imcDA, dto.cintura, dto.cadera, dto.pantorrilla, dto.brazo,
      dto.talla, dto.peso 
    ];

    await this.connection.query(query, params);

    return { mensaje: 'Evaluación nutricional registrada exitosamente' };
  }

  // Método para obtener los datos de nutrición completos por ID de Ficha
  async obtenerPorIdFicha(idFicha: string): Promise<any> {
    // Llama al procedimiento almacenado que devuelve el JSON
    const query = `CALL getNutricionCompletoJson(?)`;
    const params = [idFicha];

    try {
      // Ejecuta la consulta. Para procedimientos almacenados, el resultado
      // a menudo es un array de arrays, donde el primer array contiene los resultados.
      const result = await this.connection.query(query, params);

      // console.log('Resultado crudo de la consulta:', result); // Descomenta para depuración

      // Verifica si el resultado tiene la estructura esperada
      // El procedimiento almacenado devuelve una sola columna 'nutricionData'
      // que estará en el primer elemento del primer array de resultados.
      if (result && result.length > 0 && result[0].length > 0 && result[0][0].nutricionData) {
        // Retorna el objeto JSON directamente
        return result[0][0].nutricionData;
      } else {
        // Si no se encuentran datos o la estructura no es la esperada
        throw new NotFoundException(`Ficha de nutrición con ID ${idFicha} no encontrada o datos incompletos.`);
      }
    } catch (error) {
      console.error('Error al obtener datos de nutrición:', error);
      // Puedes lanzar una excepción personalizada o re-lanzar la excepción de NestJS
      throw error; // Re-lanza el error para que sea manejado por el controlador
    }
  }
}
