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
exports.Patologico = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Patologico = class Patologico {
    idmedicina;
    patoDermatologico;
    patoVisuales;
    patoOtorrino;
    patoEstomatologicos;
    patoEndocrinos;
    patoCardiovasculares;
    patoRespiratorio;
    patoDigestivo;
    patoNeurologico;
    patoUrologico;
    patoHemolinfatico;
    patoInfeccioso;
    patoOncologico;
    patoMusculoesqueletico;
    patoPsiquiatrico;
    patoQuirurgico;
    patoObservaciones;
    idmedicina2;
};
exports.Patologico = Patologico;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Patologico.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_DERMATOLOGICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoDermatologico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_VISUALES', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoVisuales", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_OTORRINO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoOtorrino", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_ESTOMATOLOGICOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoEstomatologicos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_ENDOCRINOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoEndocrinos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'PATO_CARDIOVASCULARES',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoCardiovasculares", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_RESPIRATORIO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoRespiratorio", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_DIGESTIVO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoDigestivo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_NEUROLOGICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoNeurologico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_UROLOGICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoUrologico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_HEMOLINFATICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoHemolinfatico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_INFECCIOSO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoInfeccioso", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_ONCOLOGICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoOncologico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'PATO_MUSCULOESQUELETICO',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoMusculoesqueletico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_PSIQUIATRICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoPsiquiatrico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'PATO_QUIRURGICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoQuirurgico", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'PATO_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Patologico.prototype, "patoObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.patologico, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Patologico.prototype, "idmedicina2", void 0);
exports.Patologico = Patologico = __decorate([
    (0, typeorm_1.Entity)('PATOLOGICO', { schema: 'Sirma' })
], Patologico);
//# sourceMappingURL=patologico.entity.js.map