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
exports.Revisionactual = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Revisionactual = class Revisionactual {
    idmedicina;
    revactVision;
    revactAudicion;
    revactOlfatogusto;
    revactRespiratorio;
    revactCardiovascular;
    revactDigestivo;
    revactGenital;
    revactUrinario;
    revactMusculoesqueletico;
    revactEndocrino;
    revactHemolinf;
    revactNervioso;
    revactMetabolico;
    revactObservaciones;
    idmedicina2;
};
exports.Revisionactual = Revisionactual;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Revisionactual.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_VISION', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactVision", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_AUDICION', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactAudicion", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_OLFATOGUSTO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactOlfatogusto", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_RESPIRATORIO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactRespiratorio", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'REVACT_CARDIOVASCULAR',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactCardiovascular", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_DIGESTIVO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactDigestivo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_GENITAL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactGenital", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_URINARIO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactUrinario", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'REVACT_MUSCULOESQUELETICO',
        nullable: true,
        width: 1,
    }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactMusculoesqueletico", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_ENDOCRINO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactEndocrino", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_HEMOLINF', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactHemolinf", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_NERVIOSO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactNervioso", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'REVACT_METABOLICO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactMetabolico", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'REVACT_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Revisionactual.prototype, "revactObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.revisionactual, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Revisionactual.prototype, "idmedicina2", void 0);
exports.Revisionactual = Revisionactual = __decorate([
    (0, typeorm_1.Entity)('REVISIONACTUAL', { schema: 'Sirma' })
], Revisionactual);
//# sourceMappingURL=revision-actual.entity.js.map