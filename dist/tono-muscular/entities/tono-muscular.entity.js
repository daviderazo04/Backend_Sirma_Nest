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
exports.Tonomuscular = void 0;
const fisioterapia_entity_1 = require("../../fisioterapia/entities/fisioterapia.entity");
const typeorm_1 = require("typeorm");
let Tonomuscular = class Tonomuscular {
    idfisioterapia;
    musAshworth;
    musCampbell;
    musObservaciones;
    idfisioterapia2;
};
exports.Tonomuscular = Tonomuscular;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDFISIOTERAPIA' }),
    __metadata("design:type", Number)
], Tonomuscular.prototype, "idfisioterapia", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'MUS_ASHWORTH', nullable: true }),
    __metadata("design:type", Object)
], Tonomuscular.prototype, "musAshworth", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'MUS_CAMPBELL', nullable: true }),
    __metadata("design:type", Object)
], Tonomuscular.prototype, "musCampbell", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'MUS_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Tonomuscular.prototype, "musObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fisioterapia_entity_1.Fisioterapia, (fisioterapia) => fisioterapia.tonomuscular, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([
        { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
    ]),
    __metadata("design:type", fisioterapia_entity_1.Fisioterapia)
], Tonomuscular.prototype, "idfisioterapia2", void 0);
exports.Tonomuscular = Tonomuscular = __decorate([
    (0, typeorm_1.Entity)('TONOMUSCULAR', { schema: 'Sirma' })
], Tonomuscular);
//# sourceMappingURL=tono-muscular.entity.js.map