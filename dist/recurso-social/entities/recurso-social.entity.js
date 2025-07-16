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
exports.Recursosocial = void 0;
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
const typeorm_1 = require("typeorm");
let Recursosocial = class Recursosocial {
    idenfermeria;
    rsVivecon;
    rsContactosocial;
    rsApoyored;
    rsTotal;
    idenfermeria2;
};
exports.Recursosocial = Recursosocial;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Recursosocial.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'RS_VIVECON', nullable: true }),
    __metadata("design:type", Object)
], Recursosocial.prototype, "rsVivecon", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'RS_CONTACTOSOCIAL', nullable: true }),
    __metadata("design:type", Object)
], Recursosocial.prototype, "rsContactosocial", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'RS_APOYORED', nullable: true }),
    __metadata("design:type", Object)
], Recursosocial.prototype, "rsApoyored", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'RS_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Recursosocial.prototype, "rsTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.recursosocial, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }]),
    __metadata("design:type", enfermeria_entity_1.Enfermeria)
], Recursosocial.prototype, "idenfermeria2", void 0);
exports.Recursosocial = Recursosocial = __decorate([
    (0, typeorm_1.Entity)('RECURSOSOCIAL', { schema: 'Sirma' })
], Recursosocial);
//# sourceMappingURL=recurso-social.entity.js.map