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
exports.Seguimientosalud = void 0;
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const typeorm_1 = require("typeorm");
let Seguimientosalud = class Seguimientosalud {
    idseguimientosalud;
    idficha;
    ssNombreencuestador;
    ssFechaevolucion;
    ssHoraevolucion;
    ssNotas;
    ssIndicanofarma;
    ssIndicafarma;
    idficha2;
};
exports.Seguimientosalud = Seguimientosalud;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDSEGUIMIENTOSALUD' }),
    __metadata("design:type", Number)
], Seguimientosalud.prototype, "idseguimientosalud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IDFICHA', nullable: true, length: 6 }),
    __metadata("design:type", Object)
], Seguimientosalud.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'SS_NOMBREENCUESTADOR',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Seguimientosalud.prototype, "ssNombreencuestador", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'SS_FECHAEVOLUCION', nullable: true }),
    __metadata("design:type", Object)
], Seguimientosalud.prototype, "ssFechaevolucion", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: 'SS_HORAEVOLUCION', nullable: true }),
    __metadata("design:type", Object)
], Seguimientosalud.prototype, "ssHoraevolucion", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SS_NOTAS', nullable: true }),
    __metadata("design:type", Object)
], Seguimientosalud.prototype, "ssNotas", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SS_INDICANOFARMA', nullable: true }),
    __metadata("design:type", Object)
], Seguimientosalud.prototype, "ssIndicanofarma", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'SS_INDICAFARMA', nullable: true }),
    __metadata("design:type", Object)
], Seguimientosalud.prototype, "ssIndicafarma", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.seguimientosaluds, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], Seguimientosalud.prototype, "idficha2", void 0);
exports.Seguimientosalud = Seguimientosalud = __decorate([
    (0, typeorm_1.Index)('FK_SEGUISALUD_RELATIONS_PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Entity)('SEGUIMIENTOSALUD', { schema: 'Sirma' })
], Seguimientosalud);
//# sourceMappingURL=seguimiento-salud.entity.js.map