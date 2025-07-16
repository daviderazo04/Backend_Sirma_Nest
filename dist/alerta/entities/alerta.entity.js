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
exports.Alerta = void 0;
const medicina_entity_1 = require("../../medicina/entities/medicina.entity");
const typeorm_1 = require("typeorm");
let Alerta = class Alerta {
    idmedicina;
    alertCaida;
    alertDismovilidad;
    alertAstenia;
    alertDesorientacion;
    alertComportamiento;
    idmedicina2;
};
exports.Alerta = Alerta;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Alerta.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ALERT_CAIDA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Alerta.prototype, "alertCaida", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ALERT_DISMOVILIDAD', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Alerta.prototype, "alertDismovilidad", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ALERT_ASTENIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Alerta.prototype, "alertAstenia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ALERT_DESORIENTACION', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Alerta.prototype, "alertDesorientacion", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ALERT_COMPORTAMIENTO', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Alerta.prototype, "alertComportamiento", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medicina_entity_1.Medicina, (medicina) => medicina.alerta, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }]),
    __metadata("design:type", medicina_entity_1.Medicina)
], Alerta.prototype, "idmedicina2", void 0);
exports.Alerta = Alerta = __decorate([
    (0, typeorm_1.Entity)('ALERTA', { schema: 'Sirma' })
], Alerta);
//# sourceMappingURL=alerta.entity.js.map