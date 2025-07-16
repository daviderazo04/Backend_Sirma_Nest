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
exports.Equilibriodinamico = void 0;
const fisioterapia_entity_1 = require("../../fisioterapia/entities/fisioterapia.entity");
const typeorm_1 = require("typeorm");
let Equilibriodinamico = class Equilibriodinamico {
    idfisioterapia;
    edLevantarse;
    edPasocontinuo;
    edLongpaso;
    edPasoelevado;
    edRotaciontronco;
    edPasofinal;
    idfisioterapia2;
};
exports.Equilibriodinamico = Equilibriodinamico;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDFISIOTERAPIA' }),
    __metadata("design:type", Number)
], Equilibriodinamico.prototype, "idfisioterapia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ED_LEVANTARSE', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibriodinamico.prototype, "edLevantarse", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ED_PASOCONTINUO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibriodinamico.prototype, "edPasocontinuo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ED_LONGPASO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibriodinamico.prototype, "edLongpaso", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ED_PASOELEVADO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibriodinamico.prototype, "edPasoelevado", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ED_ROTACIONTRONCO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibriodinamico.prototype, "edRotaciontronco", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ED_PASOFINAL', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibriodinamico.prototype, "edPasofinal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fisioterapia_entity_1.Fisioterapia, (fisioterapia) => fisioterapia.equilibriodinamico, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
    ]),
    __metadata("design:type", fisioterapia_entity_1.Fisioterapia)
], Equilibriodinamico.prototype, "idfisioterapia2", void 0);
exports.Equilibriodinamico = Equilibriodinamico = __decorate([
    (0, typeorm_1.Entity)('EQUILIBRIODINAMICO', { schema: 'Sirma' })
], Equilibriodinamico);
//# sourceMappingURL=equilibrio-dinamico.entity.js.map