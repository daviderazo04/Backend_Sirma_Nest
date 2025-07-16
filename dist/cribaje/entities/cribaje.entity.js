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
exports.Cribaje = void 0;
const nutricion_entity_1 = require("../../nutricion/entities/nutricion.entity");
const typeorm_1 = require("typeorm");
let Cribaje = class Cribaje {
    idnutricion;
    criPerdidaapetito;
    criPerdidapeso;
    criMovilidad;
    criEnfermedadaguda;
    criNeuropsico;
    criImc;
    criTotales;
    idnutricion2;
};
exports.Cribaje = Cribaje;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDNUTRICION' }),
    __metadata("design:type", Number)
], Cribaje.prototype, "idnutricion", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'CRI_PERDIDAAPETITO', nullable: true }),
    __metadata("design:type", Object)
], Cribaje.prototype, "criPerdidaapetito", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'CRI_PERDIDAPESO', nullable: true }),
    __metadata("design:type", Object)
], Cribaje.prototype, "criPerdidapeso", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'CRI_MOVILIDAD', nullable: true }),
    __metadata("design:type", Object)
], Cribaje.prototype, "criMovilidad", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'CRI_ENFERMEDADAGUDA', nullable: true }),
    __metadata("design:type", Object)
], Cribaje.prototype, "criEnfermedadaguda", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'CRI_NEUROPSICO', nullable: true }),
    __metadata("design:type", Object)
], Cribaje.prototype, "criNeuropsico", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'CRI_IMC', nullable: true }),
    __metadata("design:type", Object)
], Cribaje.prototype, "criImc", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'CRI_TOTALES', nullable: true }),
    __metadata("design:type", Object)
], Cribaje.prototype, "criTotales", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => nutricion_entity_1.Nutricion, (nutricion) => nutricion.cribaje, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDNUTRICION', referencedColumnName: 'idnutricion' }]),
    __metadata("design:type", nutricion_entity_1.Nutricion)
], Cribaje.prototype, "idnutricion2", void 0);
exports.Cribaje = Cribaje = __decorate([
    (0, typeorm_1.Entity)('CRIBAJE', { schema: 'Sirma' })
], Cribaje);
//# sourceMappingURL=cribaje.entity.js.map