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
exports.Examensistemico = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Examensistemico = class Examensistemico {
    idmedicina;
    exsOrgsentidos;
    exsRespiratorio;
    exsCardiovascular;
    exsDigestivo;
    exsGenitourinario;
    exsMusculoesqueletico;
    exsEndocrino;
    exsHemolinfatico;
    exsNeurologico;
    idmedicina2;
};
exports.Examensistemico = Examensistemico;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Examensistemico.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_ORGSENTIDOS', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsOrgsentidos", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_RESPIRATORIO', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsRespiratorio", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_CARDIOVASCULAR', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsCardiovascular", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_DIGESTIVO', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsDigestivo", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_GENITOURINARIO', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsGenitourinario", void 0);
__decorate([
    (0, typeorm_1.Column)('char', {
        name: 'EXS_MUSCULOESQUELETICO',
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsMusculoesqueletico", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_ENDOCRINO', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsEndocrino", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_HEMOLINFATICO', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsHemolinfatico", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'EXS_NEUROLOGICO', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Examensistemico.prototype, "exsNeurologico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.examensistemico, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Examensistemico.prototype, "idmedicina2", void 0);
exports.Examensistemico = Examensistemico = __decorate([
    (0, typeorm_1.Entity)('EXAMENSISTEMICO', { schema: 'Sirma' })
], Examensistemico);
//# sourceMappingURL=examen-sistemico.entity.js.map