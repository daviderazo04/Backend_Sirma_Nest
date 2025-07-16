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
exports.PersonaFicha = void 0;
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const persona_entity_1 = require("../../persona/entities/persona.entity");
const typeorm_1 = require("typeorm");
let PersonaFicha = class PersonaFicha {
    idpersonaficha;
    idficha;
    idpersona;
    idficha2;
    idpersona2;
};
exports.PersonaFicha = PersonaFicha;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDPERSONAFICHA' }),
    __metadata("design:type", Number)
], PersonaFicha.prototype, "idpersonaficha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IDFICHA', nullable: true, length: 6 }),
    __metadata("design:type", Object)
], PersonaFicha.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IDPERSONA', nullable: true }),
    __metadata("design:type", Object)
], PersonaFicha.prototype, "idpersona", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.personaFichas, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], PersonaFicha.prototype, "idficha2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => persona_entity_1.Persona, (persona) => persona.personaFichas, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDPERSONA', referencedColumnName: 'idpersona' }]),
    __metadata("design:type", persona_entity_1.Persona)
], PersonaFicha.prototype, "idpersona2", void 0);
exports.PersonaFicha = PersonaFicha = __decorate([
    (0, typeorm_1.Index)('FK_PERSONA__RELATIONS_PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Index)('FK_PERSONA__RELATIONS_PERSONA', ['idpersona'], {}),
    (0, typeorm_1.Entity)('PERSONA_FICHA', { schema: 'Sirma' })
], PersonaFicha);
//# sourceMappingURL=persona-ficha.entity.js.map