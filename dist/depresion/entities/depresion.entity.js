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
exports.Depresion = void 0;
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
const typeorm_1 = require("typeorm");
let Depresion = class Depresion {
    idenfermeria;
    depSatisfechovida;
    depDejaactinteres;
    depVidavacia;
    depAburrefrecuencia;
    depBuenanimo;
    depAlgomalosuceder;
    depFelizmayortiempo;
    depDesamparado;
    depActividadnueva;
    depProblemamemoria;
    depMaravillosovivir;
    depSienteinutil;
    depLlenoenergia;
    depSinesperanza;
    depOtrosmejorqueuno;
    depTotal;
    idenfermeria2;
};
exports.Depresion = Depresion;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Depresion.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_SATISFECHOVIDA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depSatisfechovida", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_DEJAACTINTERES', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depDejaactinteres", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_VIDAVACIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depVidavacia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_ABURREFRECUENCIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depAburrefrecuencia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_BUENANIMO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depBuenanimo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_ALGOMALOSUCEDER', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depAlgomalosuceder", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_FELIZMAYORTIEMPO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depFelizmayortiempo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_DESAMPARADO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depDesamparado", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_ACTIVIDADNUEVA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depActividadnueva", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_PROBLEMAMEMORIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depProblemamemoria", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_MARAVILLOSOVIVIR', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depMaravillosovivir", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_SIENTEINUTIL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depSienteinutil", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_LLENOENERGIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depLlenoenergia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_SINESPERANZA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depSinesperanza", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DEP_OTROSMEJORQUEUNO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Depresion.prototype, "depOtrosmejorqueuno", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'DEP_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Depresion.prototype, "depTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.depresion, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }]),
    __metadata("design:type", enfermeria_entity_1.Enfermeria)
], Depresion.prototype, "idenfermeria2", void 0);
exports.Depresion = Depresion = __decorate([
    (0, typeorm_1.Entity)('DEPRESION', { schema: 'Sirma' })
], Depresion);
//# sourceMappingURL=depresion.entity.js.map