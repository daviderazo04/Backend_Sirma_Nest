import { Injectable } from '@nestjs/common';
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
}
