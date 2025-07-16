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
exports.Antecedentesfamiliares = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Antecedentesfamiliares = class Antecedentesfamiliares {
    idmedicina;
    afCardiopatias;
    afDiabetes;
    afHipertension;
    afNeoplasia;
    afAlzheimer;
    afParkinson;
    afTuberculosis;
    afViolenciaintra;
    afSindromecuidador;
    afObservaciones;
    idmedicina2;
};
exports.Antecedentesfamiliares = Antecedentesfamiliares;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Antecedentesfamiliares.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_CARDIOPATIAS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afCardiopatias", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_DIABETES', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afDiabetes", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_HIPERTENSION', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afHipertension", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_NEOPLASIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afNeoplasia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_ALZHEIMER', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afAlzheimer", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_PARKINSON', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afParkinson", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_TUBERCULOSIS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afTuberculosis", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_VIOLENCIAINTRA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afViolenciaintra", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'AF_SINDROMECUIDADOR', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afSindromecuidador", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'AF_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Antecedentesfamiliares.prototype, "afObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.antecedentesfamiliares, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Antecedentesfamiliares.prototype, "idmedicina2", void 0);
exports.Antecedentesfamiliares = Antecedentesfamiliares = __decorate([
    (0, typeorm_1.Entity)('ANTECEDENTESFAMILIARES', { schema: 'Sirma' })
], Antecedentesfamiliares);
//# sourceMappingURL=antecedentes-familiare.entity.js.map