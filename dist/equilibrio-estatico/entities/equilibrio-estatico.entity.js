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
exports.Equilibrioestatico = void 0;
const fisioterapia_entity_1 = require("../../fisioterapia/entities/fisioterapia.entity");
const typeorm_1 = require("typeorm");
let Equilibrioestatico = class Equilibrioestatico {
    idfisioterapia;
    eeSentadonoapoyo;
    eeParadonoapoyo;
    idfisioterapia2;
};
exports.Equilibrioestatico = Equilibrioestatico;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDFISIOTERAPIA' }),
    __metadata("design:type", Number)
], Equilibrioestatico.prototype, "idfisioterapia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EE_SENTADONOAPOYO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibrioestatico.prototype, "eeSentadonoapoyo", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'EE_PARADONOAPOYO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Equilibrioestatico.prototype, "eeParadonoapoyo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fisioterapia_entity_1.Fisioterapia, (fisioterapia) => fisioterapia.equilibrioestatico, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)([
        { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
    ]),
    __metadata("design:type", fisioterapia_entity_1.Fisioterapia)
], Equilibrioestatico.prototype, "idfisioterapia2", void 0);
exports.Equilibrioestatico = Equilibrioestatico = __decorate([
    (0, typeorm_1.Entity)('EQUILIBRIOESTATICO', { schema: 'Sirma' })
], Equilibrioestatico);
//# sourceMappingURL=equilibrio-estatico.entity.js.map