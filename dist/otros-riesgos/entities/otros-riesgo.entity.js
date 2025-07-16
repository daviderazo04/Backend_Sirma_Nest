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
exports.Otrosriesgos = void 0;
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
const typeorm_1 = require("typeorm");
let Otrosriesgos = class Otrosriesgos {
    idenfermeria;
    orGrupoedad;
    orVivecon;
    orMovilidad;
    orEnfermedadaguda;
    orNeuropsico;
    orTotal;
    idenfermeria2;
};
exports.Otrosriesgos = Otrosriesgos;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Otrosriesgos.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'OR_GRUPOEDAD', nullable: true }),
    __metadata("design:type", Object)
], Otrosriesgos.prototype, "orGrupoedad", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'OR_VIVECON', nullable: true }),
    __metadata("design:type", Object)
], Otrosriesgos.prototype, "orVivecon", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'OR_MOVILIDAD', nullable: true }),
    __metadata("design:type", Object)
], Otrosriesgos.prototype, "orMovilidad", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'OR_ENFERMEDADAGUDA', nullable: true }),
    __metadata("design:type", Object)
], Otrosriesgos.prototype, "orEnfermedadaguda", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'OR_NEUROPSICO', nullable: true }),
    __metadata("design:type", Object)
], Otrosriesgos.prototype, "orNeuropsico", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'OR_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Otrosriesgos.prototype, "orTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.otrosriesgos, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }]),
    __metadata("design:type", enfermeria_entity_1.Enfermeria)
], Otrosriesgos.prototype, "idenfermeria2", void 0);
exports.Otrosriesgos = Otrosriesgos = __decorate([
    (0, typeorm_1.Entity)('OTROSRIESGOS', { schema: 'Sirma' })
], Otrosriesgos);
//# sourceMappingURL=otros-riesgo.entity.js.map