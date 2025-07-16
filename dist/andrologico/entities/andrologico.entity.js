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
exports.Andrologico = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Andrologico = class Andrologico {
    idmedicina;
    andEdadultantigeno;
    andTerapiahormonal;
    andObservaciones;
    idmedicina2;
};
exports.Andrologico = Andrologico;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Andrologico.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AND_EDADULTANTIGENO', nullable: true }),
    __metadata("design:type", Object)
], Andrologico.prototype, "andEdadultantigeno", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AND_TERAPIAHORMONAL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Andrologico.prototype, "andTerapiahormonal", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'AND_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Andrologico.prototype, "andObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.andrologico, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Andrologico.prototype, "idmedicina2", void 0);
exports.Andrologico = Andrologico = __decorate([
    (0, typeorm_1.Entity)('ANDROLOGICO', { schema: 'Sirma' })
], Andrologico);
//# sourceMappingURL=andrologico.entity.js.map