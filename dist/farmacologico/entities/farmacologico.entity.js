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
exports.Farmacologico = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Farmacologico = class Farmacologico {
    idmedicina;
    farAines;
    farAnalgesicos;
    farAntidiabeticos;
    farAntihipertensivos;
    farAnticoagulantes;
    farPsicofarmacos;
    farAntibioticos;
    farAlergias;
    farEfectosadversos;
    farPoliprescriptor;
    farPolifarmacia;
    farOtros;
    farObservaciones;
    idmedicina2;
};
exports.Farmacologico = Farmacologico;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Farmacologico.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_AINES', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farAines", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_ANALGESICOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farAnalgesicos", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'FAR_ANTIDIABETICOS', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farAntidiabeticos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'FAR_ANTIHIPERTENSIVOS',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farAntihipertensivos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_ANTICOAGULANTES', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farAnticoagulantes", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_PSICOFARMACOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farPsicofarmacos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_ANTIBIOTICOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farAntibioticos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_ALERGIAS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farAlergias", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_EFECTOSADVERSOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farEfectosadversos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_POLIPRESCRIPTOR', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farPoliprescriptor", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_POLIFARMACIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farPolifarmacia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FAR_OTROS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farOtros", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'FAR_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Farmacologico.prototype, "farObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.farmacologico, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Farmacologico.prototype, "idmedicina2", void 0);
exports.Farmacologico = Farmacologico = __decorate([
    (0, typeorm_1.Entity)('FARMACOLOGICO', { schema: 'Sirma' })
], Farmacologico);
//# sourceMappingURL=farmacologico.entity.js.map