"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutricioncompletoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let NutricioncompletoService = class NutricioncompletoService {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async crear(dto) {
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
    async obtenerPorIdFicha(idFicha) {
        const query = `CALL getNutricionCompletoJson(?)`;
        const params = [idFicha];
        try {
            const result = await this.connection.query(query, params);
            if (result && result.length > 0 && result[0].length > 0 && result[0][0].nutricionData) {
                return result[0][0].nutricionData;
            }
            else {
                throw new common_1.NotFoundException(`Ficha de nutrición con ID ${idFicha} no encontrada o datos incompletos.`);
            }
        }
        catch (error) {
            console.error('Error al obtener datos de nutrición:', error);
            throw error;
        }
    }
    async obtenerPorIdNutricion(idNutricion) {
        const query = `CALL getNutricionCompletoJsonByIdNutricion(?)`;
        const params = [idNutricion];
        try {
            const result = await this.connection.query(query, params);
            if (result && result.length > 0 && result[0].length > 0 && result[0][0].nutricionData) {
                return result[0][0].nutricionData;
            }
            else {
                throw new common_1.NotFoundException(`Ficha de nutrición con ID de cabecera ${idNutricion} no encontrada o datos incompletos.`);
            }
        }
        catch (error) {
            console.error('Error al obtener datos de nutrición por ID de Nutrición:', error);
            throw error;
        }
    }
    async actualizar(idNutricion, dto) {
        const query = `
      CALL updateNutricionCompleto(?, ?, ?, ?, ?,
                                   ?, ?, ?, ?, ?, ?, ?,
                                   ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                                   ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                                   ?, ?, ?, ?, ?, ?, ?) -- Corregido: 7 marcadores de posición aquí
    `;
        const params = [
            idNutricion,
            dto.idFicha, dto.nombreEncuestador, dto.evalGlobal, dto.estadoNutricional,
            dto.perdidaApetito, dto.perdidaPeso, dto.movilidad, dto.enfermedadAguda, dto.neuropsico, dto.imc,
            dto.totales,
            dto.viveDomicilio, dto.masTresMedicinas, dto.ulceraLesionCutanea, dto.comidaCompleta, dto.consumePaciente, dto.frutaVerdura, dto.vasosAgua,
            dto.formaAlimento, dto.bienNutrido, dto.estadoSalud, dto.circunBraquial, dto.circunPantorrilla, dto.evaTotal,
            dto.dietaBalanceada ? 1 : 0,
            dto.dentalesCompletas ? 1 : 0,
            dto.dificultadMasticar ? 1 : 0,
            dto.estrenimientoFrecu ? 1 : 0,
            dto.diarreaFrecu ? 1 : 0,
            dto.alergiaAlimentaria ? 1 : 0,
            dto.desayuno, dto.almuerzo, dto.cena, dto.snacks, dto.preferencias, dto.quienCocina,
            dto.imcDA, dto.cintura, dto.cadera, dto.pantorrilla, dto.brazo,
            dto.talla, dto.peso
        ];
        try {
            await this.connection.query(query, params);
            return { mensaje: `Evaluación nutricional con ID ${idNutricion} actualizada exitosamente` };
        }
        catch (error) {
            console.error('Error al actualizar datos de nutrición:', error);
            throw error;
        }
    }
};
exports.NutricioncompletoService = NutricioncompletoService;
exports.NutricioncompletoService = NutricioncompletoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], NutricioncompletoService);
//# sourceMappingURL=nutricioncompleto.service.js.map