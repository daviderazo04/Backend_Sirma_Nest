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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FichasGeneralCompletaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let FichasGeneralCompletaService = class FichasGeneralCompletaService {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async crearFichaPersona(createFichaDto) {
        const { p_cedula, p_id_ficha_nueva, p_fecha_primer_contacto, p_estado_general, p_observaciones, p_nombre_encuestador, p_pas_acostado, p_pad_acostado, p_pas_sentado, p_pad_sentado, p_diagnostico_ha, p_pulso_por_min, p_diagnostico_pulso, p_frec_respiratoria, p_diagnostico_fr, p_saturacion, p_diagnostico_saturacion, p_temperatura, p_diagnostico_temperatura, p_firma_consentimiento, p_firma_medicina, p_firma_enfermeria, p_firma_nutricion, p_firma_fisioterapia, } = createFichaDto;
        try {
            const result = await this.dataSource.query(`CALL sp_gestionar_ficha_persona2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
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
            ]);
            if (result && result.length > 0 && result[0].length > 0) {
                return {
                    message: result[0][0].Mensaje || 'Operación completada exitosamente: Ficha y Datos Generales creados.',
                    idPersona: result[0][0].ID_Persona,
                    idFicha: result[0][0].ID_Ficha,
                };
            }
            else {
                return { message: 'Operación completada, pero sin detalles de retorno explícitos del SP.' };
            }
        }
        catch (error) {
            if (error.sqlState === '45000') {
                if (error.message.includes('La persona con la cédula proporcionada no existe.')) {
                    throw new common_1.NotFoundException('Error al crear la ficha: ' + error.message);
                }
                if (error.message.includes('La IDFICHA proporcionada ya existe.')) {
                    throw new common_1.InternalServerErrorException('Error al crear la ficha: ' + error.message);
                }
            }
            throw new common_1.InternalServerErrorException('Error al procesar la solicitud: ' + error.message);
        }
    }
};
exports.FichasGeneralCompletaService = FichasGeneralCompletaService;
exports.FichasGeneralCompletaService = FichasGeneralCompletaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], FichasGeneralCompletaService);
//# sourceMappingURL=fichas-general-completa.service.js.map