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
exports.FisioterapiaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fisioterapia_entity_1 = require("./entities/fisioterapia.entity");
const paciente_service_1 = require("../paciente/paciente.service");
let FisioterapiaService = class FisioterapiaService {
    fisioterapiaRepository;
    pacienteService;
    constructor(fisioterapiaRepository, pacienteService) {
        this.fisioterapiaRepository = fisioterapiaRepository;
        this.pacienteService = pacienteService;
    }
    async create(createFisioterapiaDto) {
        if (!createFisioterapiaDto.idficha) {
            throw new common_1.NotFoundException('ID de Ficha (Paciente) es requerido para crear un registro de Fisioterapia.');
        }
        const paciente = await this.pacienteService.findOne(createFisioterapiaDto.idficha);
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente con ID de Ficha ${createFisioterapiaDto.idficha} no encontrado.`);
        }
        const fisioterapia = this.fisioterapiaRepository.create({
            ...createFisioterapiaDto,
            idficha2: paciente,
        });
        return await this.fisioterapiaRepository.save(fisioterapia);
    }
    async findAll() {
        return await this.fisioterapiaRepository.find({
            relations: ['idficha2'],
        });
    }
    async findOne(id) {
        const fisioterapia = await this.fisioterapiaRepository.findOne({
            where: { idfisioterapia: id },
            relations: ['idficha2'],
        });
        if (!fisioterapia) {
            throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${id} no encontrado.`);
        }
        return fisioterapia;
    }
    async update(id, updateFisioterapiaDto) {
        const fisioterapia = await this.fisioterapiaRepository.findOne({ where: { idfisioterapia: id } });
        if (!fisioterapia) {
            throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${id} no encontrado.`);
        }
        Object.assign(fisioterapia, updateFisioterapiaDto);
        return await this.fisioterapiaRepository.save(fisioterapia);
    }
    async remove(id) {
        const fisioterapia = await this.fisioterapiaRepository.findOne({ where: { idfisioterapia: id } });
        if (!fisioterapia) {
            throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${id} no encontrado.`);
        }
        return await this.fisioterapiaRepository.remove(fisioterapia);
    }
    async obtenerFisioterapiaCompleta(idFisioterapia) {
        const result = await this.fisioterapiaRepository.query('CALL sp_ObtenerFisioterapiaCompleta(?)', [idFisioterapia]);
        const rows = Array.isArray(result[0]) ? result[0] : result;
        if (!rows || rows.length === 0) {
            throw new common_1.NotFoundException(`No se encontró fisioterapia con ID ${idFisioterapia}.`);
        }
        return rows[0];
    }
};
exports.FisioterapiaService = FisioterapiaService;
exports.FisioterapiaService = FisioterapiaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fisioterapia_entity_1.Fisioterapia)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        paciente_service_1.PacienteService])
], FisioterapiaService);
//# sourceMappingURL=fisioterapia.service.js.map