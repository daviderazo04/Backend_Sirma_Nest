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
exports.Cognitivo = void 0;
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
const typeorm_1 = require("typeorm");
let Cognitivo = class Cognitivo {
    idenfermeria;
    cogSabefecha;
    cogAprendetres;
    cogRepitealreves;
    cogTomadoblacoloca;
    cogRepitepalabras;
    cogCopiacirculos;
    cogTotal;
    idenfermeria2;
};
exports.Cognitivo = Cognitivo;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Cognitivo.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'COG_SABEFECHA', nullable: true }),
    __metadata("design:type", Object)
], Cognitivo.prototype, "cogSabefecha", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'COG_APRENDETRES', nullable: true }),
    __metadata("design:type", Object)
], Cognitivo.prototype, "cogAprendetres", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'COG_REPITEALREVES', nullable: true }),
    __metadata("design:type", Object)
], Cognitivo.prototype, "cogRepitealreves", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'COG_TOMADOBLACOLOCA', nullable: true }),
    __metadata("design:type", Object)
], Cognitivo.prototype, "cogTomadoblacoloca", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'COG_REPITEPALABRAS', nullable: true }),
    __metadata("design:type", Object)
], Cognitivo.prototype, "cogRepitepalabras", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'COG_COPIACIRCULOS', nullable: true }),
    __metadata("design:type", Object)
], Cognitivo.prototype, "cogCopiacirculos", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'COG_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Cognitivo.prototype, "cogTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.cognitivo, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }]),
    __metadata("design:type", enfermeria_entity_1.Enfermeria)
], Cognitivo.prototype, "idenfermeria2", void 0);
exports.Cognitivo = Cognitivo = __decorate([
    (0, typeorm_1.Entity)('COGNITIVO', { schema: 'Sirma' })
], Cognitivo);
//# sourceMappingURL=cognitivo.entity.js.map