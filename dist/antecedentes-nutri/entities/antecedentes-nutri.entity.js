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
exports.Antecedentesnutri = void 0;
const nutricion_entity_1 = require("../../nutricion/entities/nutricion.entity");
const typeorm_1 = require("typeorm");
let Antecedentesnutri = class Antecedentesnutri {
    idnutricion;
    anDietabalanceada;
    anDentalescompletas;
    anDificultadmasticar;
    anEstrenimientofrecu;
    anDiarreafrecu;
    anAlergiaalimentaria;
    anDesayuno;
    anAlmuerzo;
    anCena;
    anSnacks;
    anPreferencias;
    anQuiencocina;
    idnutricion2;
};
exports.Antecedentesnutri = Antecedentesnutri;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDNUTRICION' }),
    __metadata("design:type", Number)
], Antecedentesnutri.prototype, "idnutricion", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AN_DIETABALANCEADA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anDietabalanceada", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AN_DENTALESCOMPLETAS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anDentalescompletas", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'AN_DIFICULTADMASTICAR',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anDificultadmasticar", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'AN_ESTRENIMIENTOFRECU',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anEstrenimientofrecu", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AN_DIARREAFRECU', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anDiarreafrecu", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'AN_ALERGIAALIMENTARIA',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anAlergiaalimentaria", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AN_DESAYUNO', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anDesayuno", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AN_ALMUERZO', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anAlmuerzo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AN_CENA', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anCena", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AN_SNACKS', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anSnacks", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AN_PREFERENCIAS', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anPreferencias", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AN_QUIENCOCINA', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Antecedentesnutri.prototype, "anQuiencocina", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => nutricion_entity_1.Nutricion, (nutricion) => nutricion.antecedentesnutri, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDNUTRICION', referencedColumnName: 'idnutricion' }]),
    __metadata("design:type", nutricion_entity_1.Nutricion)
], Antecedentesnutri.prototype, "idnutricion2", void 0);
exports.Antecedentesnutri = Antecedentesnutri = __decorate([
    (0, typeorm_1.Entity)('ANTECEDENTESNUTRI', { schema: 'Sirma' })
], Antecedentesnutri);
//# sourceMappingURL=antecedentes-nutri.entity.js.map