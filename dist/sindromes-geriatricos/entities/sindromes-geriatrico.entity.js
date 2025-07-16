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
exports.Sindromesgeriatricos = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Sindromesgeriatricos = class Sindromesgeriatricos {
    idmedicina;
    sgFragilidad;
    sgDismovilidad;
    sgDepresion;
    sgCaida;
    sgDelirio;
    sgMalnutricion;
    sgUlceraspresion;
    sgDemencia;
    sgIncontinencia;
    sgIatrogenia;
    idmedicina2;
};
exports.Sindromesgeriatricos = Sindromesgeriatricos;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Sindromesgeriatricos.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_FRAGILIDAD', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgFragilidad", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_DISMOVILIDAD', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgDismovilidad", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_DEPRESION', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgDepresion", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_CAIDA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgCaida", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_DELIRIO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgDelirio", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_MALNUTRICION', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgMalnutricion", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_ULCERASPRESION', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgUlceraspresion", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_DEMENCIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgDemencia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_INCONTINENCIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgIncontinencia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'SG_IATROGENIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Sindromesgeriatricos.prototype, "sgIatrogenia", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.sindromesgeriatricos, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Sindromesgeriatricos.prototype, "idmedicina2", void 0);
exports.Sindromesgeriatricos = Sindromesgeriatricos = __decorate([
    (0, typeorm_1.Entity)('SINDROMESGERIATRICOS', { schema: 'Sirma' })
], Sindromesgeriatricos);
//# sourceMappingURL=sindromes-geriatrico.entity.js.map