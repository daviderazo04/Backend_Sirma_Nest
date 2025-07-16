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
exports.Actbasicas = void 0;
const typeorm_1 = require("typeorm");
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
let Actbasicas = class Actbasicas {
    idenfermeria;
    abBanasolo;
    abVistedesvistesolo;
    abCuidaapariencia;
    abUsainodoro;
    abControlesfinteres;
    abTrasacuestalevanta;
    abCamina;
    abAlimenta;
    abTotal;
    idenfermeria2;
};
exports.Actbasicas = Actbasicas;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Actbasicas.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AB_BANASOLO', nullable: true, length: 13 }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abBanasolo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'AB_VISTEDESVISTESOLO',
        nullable: true,
        length: 13,
    }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abVistedesvistesolo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AB_CUIDAAPARIENCIA', nullable: true, length: 13 }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abCuidaapariencia", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AB_USAINODORO', nullable: true, length: 13 }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abUsainodoro", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'AB_CONTROLESFINTERES',
        nullable: true,
        length: 13,
    }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abControlesfinteres", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'AB_TRASACUESTALEVANTA',
        nullable: true,
        length: 13,
    }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abTrasacuestalevanta", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AB_CAMINA', nullable: true, length: 13 }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abCamina", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'AB_ALIMENTA', nullable: true, length: 13 }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abAlimenta", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AB_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Actbasicas.prototype, "abTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.actbasica, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }]),
    __metadata("design:type", enfermeria_entity_1.Enfermeria)
], Actbasicas.prototype, "idenfermeria2", void 0);
exports.Actbasicas = Actbasicas = __decorate([
    (0, typeorm_1.Entity)('ACTBASICAS', { schema: 'Sirma' })
], Actbasicas);
//# sourceMappingURL=act-basica.entity.js.map