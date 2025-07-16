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
exports.PersonaController = void 0;
const common_1 = require("@nestjs/common");
const persona_service_1 = require("./persona.service");
const create_persona_dto_1 = require("./dto/create-persona.dto");
const update_persona_dto_1 = require("./dto/update-persona.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const persona_ficha_entity_1 = require("../persona-ficha/entities/persona-ficha.entity");
const datos_generale_entity_1 = require("../datos-generales/entities/datos-generale.entity");
let PersonaController = class PersonaController {
    personaService;
    personaFichaRepository;
    datosGeneralesRepository;
    constructor(personaService, personaFichaRepository, datosGeneralesRepository) {
        this.personaService = personaService;
        this.personaFichaRepository = personaFichaRepository;
        this.datosGeneralesRepository = datosGeneralesRepository;
    }
    async create(createPersonaDto) {
        return await this.personaService.create(createPersonaDto);
    }
    async findAll() {
        return await this.personaService.findAll();
    }
    async findOne(id) {
        return await this.personaService.findOne(+id);
    }
    async findByCedula(cedula) {
        return await this.personaService.findByCedula(cedula);
    }
    async update(id, updatePersonaDto) {
        return await this.personaService.update(+id, updatePersonaDto);
    }
    async remove(id) {
        await this.personaService.remove(+id);
    }
    async getDatosGeneralesPorCedula(cedula) {
        const persona = await this.personaService.findByCedula(cedula);
        if (!persona)
            return null;
        const personaFichas = await this.personaFichaRepository.find({
            where: { idpersona: persona.idpersona },
            relations: ['idficha2'],
        });
        const idfichas = personaFichas.map((pf) => pf.idficha);
        const datosGenerales = await this.datosGeneralesRepository.find({
            where: { idficha: (0, typeorm_2.In)(idfichas) },
        });
        return datosGenerales;
    }
    async getFichasMedicasPorCedula(cedula) {
        const persona = await this.personaService.findByCedula(cedula);
        if (!persona)
            return null;
        const personaFichas = await this.personaFichaRepository.find({
            where: { idpersona: persona.idpersona },
            relations: ['idficha2'],
        });
        return personaFichas.map((pf) => pf.idficha2);
    }
    async obtenerGruposEdad() {
        return await this.personaService.obtenerGruposEdad();
    }
    async personasPorSexo() {
        return await this.personaService.personasPorSexo();
    }
    async personasPorEstadoCivil() {
        return await this.personaService.personasPorEstadoCivil();
    }
    async personasPorZona() {
        return await this.personaService.personasPorZona();
    }
    async personasPorOcupacion() {
        return await this.personaService.personasPorOcupacion();
    }
    async personasPorInstruccion() {
        return await this.personaService.personasPorInstruccion();
    }
    async personasPorComunidad() {
        return await this.personaService.personasPorComunidad();
    }
    async personasPorCuidador() {
        return await this.personaService.personasPorCuidador();
    }
};
exports.PersonaController = PersonaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_persona_dto_1.CreatePersonaDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('cedula/:cedula'),
    __param(0, (0, common_1.Param)('cedula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "findByCedula", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_persona_dto_1.UpdatePersonaDto]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('datos-generales/:cedula'),
    __param(0, (0, common_1.Param)('cedula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "getDatosGeneralesPorCedula", null);
__decorate([
    (0, common_1.Get)('fichas-medicas/:cedula'),
    __param(0, (0, common_1.Param)('cedula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "getFichasMedicasPorCedula", null);
__decorate([
    (0, common_1.Get)('reporte/grupos-edad'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "obtenerGruposEdad", null);
__decorate([
    (0, common_1.Get)('reporte/sexo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "personasPorSexo", null);
__decorate([
    (0, common_1.Get)('reporte/estado-civil'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "personasPorEstadoCivil", null);
__decorate([
    (0, common_1.Get)('reporte/zona'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "personasPorZona", null);
__decorate([
    (0, common_1.Get)('reporte/ocupacion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "personasPorOcupacion", null);
__decorate([
    (0, common_1.Get)('reporte/instruccion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "personasPorInstruccion", null);
__decorate([
    (0, common_1.Get)('reporte/comunidad'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "personasPorComunidad", null);
__decorate([
    (0, common_1.Get)('reporte/cuidador'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "personasPorCuidador", null);
exports.PersonaController = PersonaController = __decorate([
    (0, common_1.Controller)('api/personas'),
    __param(1, (0, typeorm_1.InjectRepository)(persona_ficha_entity_1.PersonaFicha)),
    __param(2, (0, typeorm_1.InjectRepository)(datos_generale_entity_1.Datosgenerales)),
    __metadata("design:paramtypes", [persona_service_1.PersonaService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PersonaController);
//# sourceMappingURL=persona.controller.js.map