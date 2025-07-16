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
exports.Evaluacion = void 0;
const nutricion_entity_1 = require("../../nutricion/entities/nutricion.entity");
const typeorm_1 = require("typeorm");
let Evaluacion = class Evaluacion {
    idnutricion;
    evaVivedomicilio;
    evaMastresmedicinas;
    evaUlceralesioncutanea;
    evaComidacompleta;
    evaConsumepaciente;
    evaFrutaverdura;
    evaVasosagua;
    evaFormaalimento;
    evaBiennutrido;
    evaEstadosalud;
    evaCircunbraquial;
    evaCircunpantorrilla;
    evaTotal;
    idnutricion2;
};
exports.Evaluacion = Evaluacion;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDNUTRICION' }),
    __metadata("design:type", Number)
], Evaluacion.prototype, "idnutricion", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_VIVEDOMICILIO', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaVivedomicilio", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_MASTRESMEDICINAS', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaMastresmedicinas", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_ULCERALESIONCUTANEA', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaUlceralesioncutanea", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_COMIDACOMPLETA', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaComidacompleta", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'EVA_CONSUMEPACIENTE',
        nullable: true,
        precision: 2,
        scale: 1,
    }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaConsumepaciente", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_FRUTAVERDURA', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaFrutaverdura", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'EVA_VASOSAGUA',
        nullable: true,
        precision: 2,
        scale: 1,
    }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaVasosagua", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_FORMAALIMENTO', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaFormaalimento", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_BIENNUTRIDO', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaBiennutrido", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'EVA_ESTADOSALUD',
        nullable: true,
        precision: 2,
        scale: 1,
    }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaEstadosalud", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'EVA_CIRCUNBRAQUIAL',
        nullable: true,
        precision: 2,
        scale: 1,
    }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaCircunbraquial", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_CIRCUNPANTORRILLA', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaCircunpantorrilla", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'EVA_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Evaluacion.prototype, "evaTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => nutricion_entity_1.Nutricion, (nutricion) => nutricion.evaluacion, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDNUTRICION', referencedColumnName: 'idnutricion' }]),
    __metadata("design:type", nutricion_entity_1.Nutricion)
], Evaluacion.prototype, "idnutricion2", void 0);
exports.Evaluacion = Evaluacion = __decorate([
    (0, typeorm_1.Entity)('EVALUACION', { schema: 'Sirma' })
], Evaluacion);
//# sourceMappingURL=evaluacion.entity.js.map