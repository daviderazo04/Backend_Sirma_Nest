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
exports.Tamizaje = void 0;
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
const typeorm_1 = require("typeorm");
let Tamizaje = class Tamizaje {
    idenfermeria;
    tamDifvisual;
    tamDifauditiva;
    tamLevanteanda;
    tamPerdidaorina;
    tamPerdidapeso;
    tamPerdidamemoria;
    tamTristedeprimido;
    tamBanarsolo;
    tamComprasolo;
    tamVivesolo;
    tamTotal;
    idenfermeria2;
};
exports.Tamizaje = Tamizaje;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Tamizaje.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_DIFVISUAL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamDifvisual", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_DIFAUDITIVA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamDifauditiva", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_LEVANTEANDA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamLevanteanda", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_PERDIDAORINA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamPerdidaorina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_PERDIDAPESO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamPerdidapeso", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_PERDIDAMEMORIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamPerdidamemoria", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_TRISTEDEPRIMIDO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamTristedeprimido", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_BANARSOLO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamBanarsolo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_COMPRASOLO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamComprasolo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'TAM_VIVESOLO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamVivesolo", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'TAM_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Tamizaje.prototype, "tamTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.tamizaje, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }]),
    __metadata("design:type", enfermeria_entity_1.Enfermeria)
], Tamizaje.prototype, "idenfermeria2", void 0);
exports.Tamizaje = Tamizaje = __decorate([
    (0, typeorm_1.Entity)('TAMIZAJE', { schema: 'Sirma' })
], Tamizaje);
//# sourceMappingURL=tamizaje.entity.js.map