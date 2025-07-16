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
exports.Paciente = void 0;
const datos_generale_entity_1 = require("../../datos-generales/entities/datos-generale.entity");
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
const fisioterapia_entity_1 = require("../../fisioterapia/entities/fisioterapia.entity");
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const nutricion_entity_1 = require("../../nutricion/entities/nutricion.entity");
const persona_ficha_entity_1 = require("../../persona-ficha/entities/persona-ficha.entity");
const seguimiento_fisioterapia_entity_1 = require("../../seguimiento-fisioterapia/entities/seguimiento-fisioterapia.entity");
const seguimiento_salud_entity_1 = require("../../seguimiento-salud/entities/seguimiento-salud.entity");
const typeorm_1 = require("typeorm");
let Paciente = class Paciente {
    idficha;
    pacFechaprimercontacto;
    pacEstadogeneral;
    pacObservaciones;
    datosgenerales;
    enfermerias;
    fisioterapias;
    medicinas;
    nutricions;
    personaFichas;
    seguimientofisioterapias;
    seguimientosaluds;
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'IDFICHA', length: 6 }),
    __metadata("design:type", String)
], Paciente.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        name: 'PAC_FECHAPRIMERCONTACTO',
        nullable: true,
        comment: 'Fecha del primer contacto con el paciente',
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "pacFechaprimercontacto", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PAC_ESTADOGENERAL',
        nullable: true,
        comment: 'Estado general de salud del paciente',
        length: 13,
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "pacEstadogeneral", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        name: 'PAC_OBSERVACIONES',
        nullable: true,
        comment: 'Observaciones sobre el estado de salud del paciente',
    }),
    __metadata("design:type", Object)
], Paciente.prototype, "pacObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => datos_generale_entity_1.Datosgenerales, (datosgenerales) => datosgenerales.idficha),
    __metadata("design:type", Array)
], Paciente.prototype, "datosgenerales", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.idficha2),
    __metadata("design:type", Array)
], Paciente.prototype, "enfermerias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => fisioterapia_entity_1.Fisioterapia, (fisioterapia) => fisioterapia.idficha2),
    __metadata("design:type", Array)
], Paciente.prototype, "fisioterapias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medicina_entity_1.Medicina, (medicina) => medicina.idficha2),
    __metadata("design:type", Array)
], Paciente.prototype, "medicinas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => nutricion_entity_1.Nutricion, (nutricion) => nutricion.idficha2),
    __metadata("design:type", Array)
], Paciente.prototype, "nutricions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => persona_ficha_entity_1.PersonaFicha, (personaFicha) => personaFicha.idficha2),
    __metadata("design:type", Array)
], Paciente.prototype, "personaFichas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => seguimiento_fisioterapia_entity_1.Seguimientofisioterapia, (seguimientofisioterapia) => seguimientofisioterapia.idficha2),
    __metadata("design:type", Array)
], Paciente.prototype, "seguimientofisioterapias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => seguimiento_salud_entity_1.Seguimientosalud, (seguimientosalud) => seguimientosalud.idficha2),
    __metadata("design:type", Array)
], Paciente.prototype, "seguimientosaluds", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)('PACIENTE', { schema: 'Sirma' })
], Paciente);
//# sourceMappingURL=paciente.entity.js.map