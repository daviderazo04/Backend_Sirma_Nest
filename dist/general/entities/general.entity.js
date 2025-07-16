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
exports.General = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let General = class General {
    idmedicina;
    genVacunascompletas;
    genHigienecuerpo;
    genControlsalud;
    genHigieneoral;
    genActrecreativa;
    genOtrossaludables;
    genObservaciones;
    idmedicina2;
};
exports.General = General;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], General.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'GEN_VACUNASCOMPLETAS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], General.prototype, "genVacunascompletas", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'GEN_HIGIENECUERPO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], General.prototype, "genHigienecuerpo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'GEN_CONTROLSALUD', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], General.prototype, "genControlsalud", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'GEN_HIGIENEORAL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], General.prototype, "genHigieneoral", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'GEN_ACTRECREATIVA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], General.prototype, "genActrecreativa", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'GEN_OTROSSALUDABLES', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], General.prototype, "genOtrossaludables", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'GEN_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], General.prototype, "genObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.general, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], General.prototype, "idmedicina2", void 0);
exports.General = General = __decorate([
    (0, typeorm_1.Entity)('GENERAL', { schema: 'Sirma' })
], General);
//# sourceMappingURL=general.entity.js.map