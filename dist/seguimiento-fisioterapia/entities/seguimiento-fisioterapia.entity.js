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
exports.Seguimientofisioterapia = void 0;
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const typeorm_1 = require("typeorm");
let Seguimientofisioterapia = class Seguimientofisioterapia {
    idseguimientofisio;
    idficha;
    sfNombreencuestador;
    sfFechaevolucion;
    sfHoraevolucion;
    sfNotas;
    sfPreescripciones;
    sfMedicacionactual;
    sfObjetivotratamiento;
    sfIntervencionrealizada;
    sfAjusteplantratamiento;
    sfTiempoempleado;
    sfTecnicausada;
    sfObservaciones;
    idficha2;
};
exports.Seguimientofisioterapia = Seguimientofisioterapia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDSEGUIMIENTOFISIO' }),
    __metadata("design:type", Number)
], Seguimientofisioterapia.prototype, "idseguimientofisio", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IDFICHA', nullable: true, length: 6 }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'SF_NOMBREENCUESTADOR',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfNombreencuestador", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'SF_FECHAEVOLUCION', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfFechaevolucion", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: 'SF_HORAEVOLUCION', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfHoraevolucion", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_NOTAS', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfNotas", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_PREESCRIPCIONES', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfPreescripciones", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_MEDICACIONACTUAL', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfMedicacionactual", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_OBJETIVOTRATAMIENTO', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfObjetivotratamiento", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_INTERVENCIONREALIZADA', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfIntervencionrealizada", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_AJUSTEPLANTRATAMIENTO', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfAjusteplantratamiento", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_TIEMPOEMPLEADO', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfTiempoempleado", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_TECNICAUSADA', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfTecnicausada", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SF_OBSERVACIONES', nullable: true }),
    __metadata("design:type", Object)
], Seguimientofisioterapia.prototype, "sfObservaciones", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.seguimientofisioterapias, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], Seguimientofisioterapia.prototype, "idficha2", void 0);
exports.Seguimientofisioterapia = Seguimientofisioterapia = __decorate([
    (0, typeorm_1.Index)('FK_SEGUIMIE_RELATIONS_PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Entity)('SEGUIMIENTOFISIOTERAPIA', { schema: 'Sirma' })
], Seguimientofisioterapia);
//# sourceMappingURL=seguimiento-fisioterapia.entity.js.map