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
exports.PacienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const paciente_entity_1 = require("./entities/paciente.entity");
let PacienteService = class PacienteService {
    pacienteRepository;
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async create(createPacienteDto) {
        const paciente = this.pacienteRepository.create(createPacienteDto);
        return await this.pacienteRepository.save(paciente);
    }
    async findAll() {
        return await this.pacienteRepository.find();
    }
    async findOne(idficha) {
        const paciente = await this.pacienteRepository.findOne({
            where: { idficha },
        });
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente con ID de ficha "${idficha}" no encontrado.`);
        }
        return paciente;
    }
    async update(idficha, updatePacienteDto) {
        const paciente = await this.findOne(idficha);
        Object.assign(paciente, updatePacienteDto);
        return await this.pacienteRepository.save(paciente);
    }
    async remove(idficha) {
        const result = await this.pacienteRepository.delete(idficha);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Paciente con ID de ficha "${idficha}" no encontrado.`);
        }
    }
    async insertarFichaGeneral(datos) {
        const { p_IDFICHA, p_FECHAPRIMERCONTACTO, p_ESTADOGENERAL, p_OBSERVACIONES, p_IDPERSONA, p_NOMBREENCUESTADOR, p_PAS_ACOSTADO, p_PAD_ACOSTADO, p_PAS_SENTADO, p_PAD_SENTADO, p_DIAGNOSTICOHA, p_PULSOPORMIN, p_DIAGNOSTICOPULSO, p_FRECRESPIRATORIA, p_DIAGNOSTICOFR, p_SATURACION, p_DIAGNOSTICOSATURACION, p_TEMPERATURA, p_DIAGNOSTICOTEMPERATURA, } = datos;
        const result = await this.pacienteRepository.query('CALL InsertarFichaGeneral(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            p_IDFICHA,
            p_FECHAPRIMERCONTACTO,
            p_ESTADOGENERAL,
            p_OBSERVACIONES,
            p_IDPERSONA,
            p_NOMBREENCUESTADOR,
            p_PAS_ACOSTADO,
            p_PAD_ACOSTADO,
            p_PAS_SENTADO,
            p_PAD_SENTADO,
            p_DIAGNOSTICOHA,
            p_PULSOPORMIN,
            p_DIAGNOSTICOPULSO,
            p_FRECRESPIRATORIA,
            p_DIAGNOSTICOFR,
            p_SATURACION,
            p_DIAGNOSTICOSATURACION,
            p_TEMPERATURA,
            p_DIAGNOSTICOTEMPERATURA,
        ]);
        return result;
    }
    async getPacienteByIdficha(cedula) {
        const result = await this.pacienteRepository.query('CALL obtener_ficha_por_cedula(?)', [cedula]);
        const rows = Array.isArray(result[0])
            ? result[0]
            : result;
        if (!rows || rows.length === 0) {
            throw new common_1.NotFoundException(`No se encontró ficha para la cédula ${cedula}`);
        }
        return rows;
    }
    async obtenerFichasGenerales() {
        const result = await this.pacienteRepository.query('CALL sp_ObtenerFichasPacientes()');
        const rows = Array.isArray(result[0])
            ? result[0]
            : result;
        if (!rows || rows.length === 0) {
            throw new common_1.NotFoundException(`No se encontraron fichas generales.`);
        }
        return rows;
    }
    async obtenerFichasPorCedula(cedula) {
        const result = await this.pacienteRepository.query('CALL SP_OBTENERFICHASPORCEDULA(?)', [cedula]);
        const rows = Array.isArray(result[0])
            ? result[0]
            : result;
        if (!rows || rows.length === 0) {
            throw new common_1.NotFoundException(`No se encontraron fichas para la cédula ${cedula}.`);
        }
        return rows;
    }
};
exports.PacienteService = PacienteService;
exports.PacienteService = PacienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paciente_entity_1.Paciente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PacienteService);
//# sourceMappingURL=paciente.service.js.map