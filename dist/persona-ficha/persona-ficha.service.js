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
exports.PersonaFichaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const persona_ficha_entity_1 = require("./entities/persona-ficha.entity");
let PersonaFichaService = class PersonaFichaService {
    personaFichaRepository;
    constructor(personaFichaRepository) {
        this.personaFichaRepository = personaFichaRepository;
    }
    async create(createPersonaFichaDto) {
        const personaFicha = this.personaFichaRepository.create(createPersonaFichaDto);
        return await this.personaFichaRepository.save(personaFicha);
    }
    async findAll() {
        return await this.personaFichaRepository.find({
            relations: ['idficha2', 'idpersona2'],
        });
    }
    async findOne(id) {
        const personaFicha = await this.personaFichaRepository.findOne({
            where: { idpersonaficha: id },
            relations: ['idficha2', 'idpersona2'],
        });
        if (!personaFicha) {
            throw new common_1.NotFoundException(`PersonaFicha con ID ${id} no encontrada.`);
        }
        return personaFicha;
    }
    async update(id, updatePersonaFichaDto) {
        const personaFicha = await this.findOne(id);
        Object.assign(personaFicha, updatePersonaFichaDto);
        return await this.personaFichaRepository.save(personaFicha);
    }
    async remove(id) {
        const result = await this.personaFichaRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`PersonaFicha con ID ${id} no encontrada.`);
        }
    }
};
exports.PersonaFichaService = PersonaFichaService;
exports.PersonaFichaService = PersonaFichaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(persona_ficha_entity_1.PersonaFicha)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonaFichaService);
//# sourceMappingURL=persona-ficha.service.js.map