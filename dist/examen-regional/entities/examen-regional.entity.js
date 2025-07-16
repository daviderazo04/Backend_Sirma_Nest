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
exports.Examenregional = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Examenregional = class Examenregional {
    idmedicina;
    exrPiel;
    exrCabeza;
    exrOjos;
    exrOidos;
    exrBoca;
    exrNariz;
    exrCuello;
    exrAxilamama;
    exrTorax;
    exrAbdomen;
    exrColumna;
    exrPerine;
    exrMiembrossuper;
    exrMiembrosinfer;
    idmedicina2;
};
exports.Examenregional = Examenregional;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Examenregional.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_PIEL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrPiel", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_CABEZA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrCabeza", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_OJOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrOjos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_OIDOS', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrOidos", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_BOCA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrBoca", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_NARIZ', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrNariz", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_CUELLO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrCuello", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_AXILAMAMA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrAxilamama", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_TORAX', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrTorax", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_ABDOMEN', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrAbdomen", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_COLUMNA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrColumna", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_PERINE', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrPerine", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_MIEMBROSSUPER', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrMiembrossuper", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EXR_MIEMBROSINFER', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Examenregional.prototype, "exrMiembrosinfer", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.examenregional, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Examenregional.prototype, "idmedicina2", void 0);
exports.Examenregional = Examenregional = __decorate([
    (0, typeorm_1.Entity)('EXAMENREGIONAL', { schema: 'Sirma' })
], Examenregional);
//# sourceMappingURL=examen-regional.entity.js.map