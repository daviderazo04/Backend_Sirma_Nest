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
exports.Fuerza = void 0;
const fisioterapia_entity_1 = require("../../fisioterapia/entities/fisioterapia.entity");
const typeorm_1 = require("typeorm");
let Fuerza = class Fuerza {
    idfisioterapia;
    fueBrazoizq;
    fueBrazoder;
    fuePiernaizq;
    fuePiernader;
    fueTroncoizq;
    fueTroncoder;
    fueCuelloizq;
    fueCuelloder;
    idfisioterapia2;
};
exports.Fuerza = Fuerza;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDFISIOTERAPIA' }),
    __metadata("design:type", Number)
], Fuerza.prototype, "idfisioterapia", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_BRAZOIZQ', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fueBrazoizq", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_BRAZODER', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fueBrazoder", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_PIERNAIZQ', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fuePiernaizq", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_PIERNADER', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fuePiernader", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_TRONCOIZQ', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fueTroncoizq", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_TRONCODER', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fueTroncoder", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_CUELLOIZQ', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fueCuelloizq", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FUE_CUELLODER', nullable: true }),
    __metadata("design:type", Object)
], Fuerza.prototype, "fueCuelloder", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fisioterapia_entity_1.Fisioterapia, (fisioterapia) => fisioterapia.fuerza, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([
        { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
    ]),
    __metadata("design:type", fisioterapia_entity_1.Fisioterapia)
], Fuerza.prototype, "idfisioterapia2", void 0);
exports.Fuerza = Fuerza = __decorate([
    (0, typeorm_1.Entity)('FUERZA', { schema: 'Sirma' })
], Fuerza);
//# sourceMappingURL=fuerza.entity.js.map