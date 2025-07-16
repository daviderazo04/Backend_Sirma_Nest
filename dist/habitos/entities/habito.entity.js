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
exports.Habitos = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Habitos = class Habitos {
    idmedicina;
    nocTabaquismo;
    nocAlcoholismo;
    nocAdicciones;
    nocOtros;
    nocObservaciones;
    idmedicina2;
};
exports.Habitos = Habitos;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Habitos.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'NOC_TABAQUISMO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Habitos.prototype, "nocTabaquismo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'NOC_ALCOHOLISMO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Habitos.prototype, "nocAlcoholismo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'NOC_ADICCIONES', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Habitos.prototype, "nocAdicciones", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'NOC_OTROS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Habitos.prototype, "nocOtros", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'NOC_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Habitos.prototype, "nocObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.habitosnocivos, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Habitos.prototype, "idmedicina2", void 0);
exports.Habitos = Habitos = __decorate([
    (0, typeorm_1.Entity)('HABITOSNOCIVOS', { schema: 'Sirma' })
], Habitos);
//# sourceMappingURL=habito.entity.js.map