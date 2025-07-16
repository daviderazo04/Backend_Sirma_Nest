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
exports.Ginecologico = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Ginecologico = class Ginecologico {
    idmedicina;
    ginEdadmenopausia;
    ginEdadultmamografia;
    ginEdadultcitologia;
    ginCantembarazos;
    ginCantpartos;
    ginCantcesareas;
    ginTerapiahormonal;
    ginObservaciones;
    idmedicina2;
};
exports.Ginecologico = Ginecologico;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Ginecologico.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'GIN_EDADMENOPAUSIA', nullable: true }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginEdadmenopausia", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'GIN_EDADULTMAMOGRAFIA', nullable: true }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginEdadultmamografia", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'GIN_EDADULTCITOLOGIA', nullable: true }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginEdadultcitologia", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'GIN_CANTEMBARAZOS', nullable: true }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginCantembarazos", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'GIN_CANTPARTOS', nullable: true }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginCantpartos", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'GIN_CANTCESAREAS', nullable: true }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginCantcesareas", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'GIN_TERAPIAHORMONAL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginTerapiahormonal", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'GIN_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Ginecologico.prototype, "ginObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.ginecologico, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Ginecologico.prototype, "idmedicina2", void 0);
exports.Ginecologico = Ginecologico = __decorate([
    (0, typeorm_1.Entity)('GINECOLOGICO', { schema: 'Sirma' })
], Ginecologico);
//# sourceMappingURL=ginecologico.entity.js.map