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
exports.PersonaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const persona_entity_1 = require("./entities/persona.entity");
let PersonaService = class PersonaService {
    personaRepository;
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
    }
    async create(createPersonaDto) {
        const persona = this.personaRepository.create(createPersonaDto);
        return await this.personaRepository.save(persona);
    }
    async findAll() {
        return await this.personaRepository.find();
    }
    async findOne(id) {
        const persona = await this.personaRepository.findOne({
            where: { idpersona: id },
        });
        if (!persona) {
            throw new common_1.NotFoundException(`Persona con ID ${id} no encontrada.`);
        }
        return persona;
    }
    async update(id, updatePersonaDto) {
        const persona = await this.findOne(id);
        Object.assign(persona, updatePersonaDto);
        return await this.personaRepository.save(persona);
    }
    async remove(id) {
        const result = await this.personaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Persona con ID ${id} no encontrada.`);
        }
    }
    async findByCedula(cedula) {
        const persona = await this.personaRepository.findOne({
            where: { perCedula: cedula },
        });
        if (!persona) {
            throw new common_1.NotFoundException(`Persona con cédula ${cedula} no encontrada.`);
        }
        return persona;
    }
    async obtenerGruposEdad() {
        const result = await this.personaRepository.query('CALL sp_ObtenerGruposEdad()');
        const rows = Array.isArray(result[0])
            ? result[0]
            : result;
        if (!rows || rows.length === 0) {
            throw new common_1.NotFoundException(`No se encontraron datos de grupos de edad.`);
        }
        return rows;
    }
    async personasPorSexo() {
        const result = await this.personaRepository.query('CALL sp_PersonasPorSexo()');
        return result[0];
    }
    async personasPorEstadoCivil() {
        const result = await this.personaRepository.query('CALL sp_PersonasPorEstadoCivil()');
        return result[0];
    }
    async personasPorZona() {
        const result = await this.personaRepository.query('CALL sp_PersonasPorZona()');
        return result[0];
    }
    async personasPorOcupacion() {
        const result = await this.personaRepository.query('CALL sp_PersonasPorOcupacion()');
        return result[0];
    }
    async personasPorInstruccion() {
        const result = await this.personaRepository.query('CALL sp_PersonasPorInstruccion()');
        return result[0];
    }
    async personasPorComunidad() {
        const result = await this.personaRepository.query('CALL sp_PersonasPorComunidad()');
        return result[0];
    }
    async personasPorCuidador() {
        const result = await this.personaRepository.query('CALL sp_PersonasPorCuidador()');
        return result[0];
    }
};
exports.PersonaService = PersonaService;
exports.PersonaService = PersonaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(persona_entity_1.Persona)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonaService);
//# sourceMappingURL=persona.service.js.map