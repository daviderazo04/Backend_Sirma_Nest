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
exports.Nutricion = void 0;
const antecedentes_nutri_entity_1 = require("../../antecedentes-nutri/entities/antecedentes-nutri.entity");
const cribaje_entity_1 = require("../../cribaje/entities/cribaje.entity");
const datos_antropometrico_entity_1 = require("../../datos-antropometricos/entities/datos-antropometrico.entity");
const evaluacion_entity_1 = require("../../evaluacion/entities/evaluacion.entity");
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const typeorm_1 = require("typeorm");
let Nutricion = class Nutricion {
    idnutricion;
    idficha;
    nutNombreencuestador;
    nutEvalglobal;
    nutEstadonutricional;
    antecedentesnutri;
    cribaje;
    datosantropometricos;
    evaluacion;
    idficha2;
};
exports.Nutricion = Nutricion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDNUTRICION' }),
    __metadata("design:type", Number)
], Nutricion.prototype, "idnutricion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IDFICHA', length: 6 }),
    __metadata("design:type", String)
], Nutricion.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'NUT_NOMBREENCUESTADOR',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Nutricion.prototype, "nutNombreencuestador", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'NUT_EVALGLOBAL',
        nullable: true,
        precision: 3,
        scale: 1,
    }),
    __metadata("design:type", Object)
], Nutricion.prototype, "nutEvalglobal", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'NUT_ESTADONUTRICIONAL', nullable: true }),
    __metadata("design:type", Object)
], Nutricion.prototype, "nutEstadonutricional", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => antecedentes_nutri_entity_1.Antecedentesnutri, (antecedentesnutri) => antecedentesnutri.idnutricion2),
    __metadata("design:type", antecedentes_nutri_entity_1.Antecedentesnutri)
], Nutricion.prototype, "antecedentesnutri", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cribaje_entity_1.Cribaje, (cribaje) => cribaje.idnutricion2),
    __metadata("design:type", cribaje_entity_1.Cribaje)
], Nutricion.prototype, "cribaje", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => datos_antropometrico_entity_1.Datosantropometricos, (datosantropometricos) => datosantropometricos.idnutricion2),
    __metadata("design:type", datos_antropometrico_entity_1.Datosantropometricos)
], Nutricion.prototype, "datosantropometricos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => evaluacion_entity_1.Evaluacion, (evaluacion) => evaluacion.idnutricion2),
    __metadata("design:type", evaluacion_entity_1.Evaluacion)
], Nutricion.prototype, "evaluacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.nutricions, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], Nutricion.prototype, "idficha2", void 0);
exports.Nutricion = Nutricion = __decorate([
    (0, typeorm_1.Index)('FK_NUTRICIO_PACIENTE__PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Entity)('NUTRICION', { schema: 'Sirma' })
], Nutricion);
//# sourceMappingURL=nutricion.entity.js.map