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
exports.Datosantropometricos = void 0;
const nutricion_entity_1 = require("../../nutricion/entities/nutricion.entity");
const typeorm_1 = require("typeorm");
let Datosantropometricos = class Datosantropometricos {
    idnutricion;
    daImc;
    daCintura;
    daCadera;
    daPantorrilla;
    daBrazo;
    daTalla;
    daPeso;
    idnutricion2;
};
exports.Datosantropometricos = Datosantropometricos;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDNUTRICION' }),
    __metadata("design:type", Number)
], Datosantropometricos.prototype, "idnutricion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'DA_IMC', nullable: true, precision: 4, scale: 2 }),
    __metadata("design:type", Object)
], Datosantropometricos.prototype, "daImc", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'DA_CINTURA', nullable: true }),
    __metadata("design:type", Object)
], Datosantropometricos.prototype, "daCintura", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'DA_CADERA', nullable: true }),
    __metadata("design:type", Object)
], Datosantropometricos.prototype, "daCadera", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'DA_PANTORRILLA', nullable: true }),
    __metadata("design:type", Object)
], Datosantropometricos.prototype, "daPantorrilla", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'DA_BRAZO', nullable: true }),
    __metadata("design:type", Object)
], Datosantropometricos.prototype, "daBrazo", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'DA_TALLA', nullable: true, precision: 3, scale: 2 }),
    __metadata("design:type", Object)
], Datosantropometricos.prototype, "daTalla", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'DA_PESO', nullable: true, precision: 5, scale: 2 }),
    __metadata("design:type", Object)
], Datosantropometricos.prototype, "daPeso", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => nutricion_entity_1.Nutricion, (nutricion) => nutricion.datosantropometricos, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDNUTRICION', referencedColumnName: 'idnutricion' }]),
    __metadata("design:type", nutricion_entity_1.Nutricion)
], Datosantropometricos.prototype, "idnutricion2", void 0);
exports.Datosantropometricos = Datosantropometricos = __decorate([
    (0, typeorm_1.Entity)('DATOSANTROPOMETRICOS', { schema: 'Sirma' })
], Datosantropometricos);
//# sourceMappingURL=datos-antropometrico.entity.js.map