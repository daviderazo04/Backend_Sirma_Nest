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
exports.Fisioterapia = void 0;
const dolor_fisio_entity_1 = require("../../dolor-fisio/entities/dolor-fisio.entity");
const equilibrio_dinamico_entity_1 = require("../../equilibrio-dinamico/entities/equilibrio-dinamico.entity");
const equilibrio_estatico_entity_1 = require("../../equilibrio-estatico/entities/equilibrio-estatico.entity");
const fuerza_entity_1 = require("../../fuerza/entities/fuerza.entity");
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const tono_muscular_entity_1 = require("../../tono-muscular/entities/tono-muscular.entity");
const typeorm_1 = require("typeorm");
let Fisioterapia = class Fisioterapia {
    idfisioterapia;
    idficha;
    fisNombreencuestador;
    fisProblemasactual;
    fisMarcha;
    fisTraslado;
    fisDolor;
    fisPeso;
    fisTalla;
    fisDiscapacidad;
    dolorfisios;
    equilibriodinamico;
    equilibrioestatico;
    idficha2;
    fuerza;
    tonomuscular;
};
exports.Fisioterapia = Fisioterapia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDFISIOTERAPIA' }),
    __metadata("design:type", Number)
], Fisioterapia.prototype, "idfisioterapia", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IDFICHA', length: 6 }),
    __metadata("design:type", String)
], Fisioterapia.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'FIS_NOMBREENCUESTADOR',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisNombreencuestador", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'FIS_PROBLEMASACTUAL', nullable: true }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisProblemasactual", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'FIS_MARCHA', nullable: true, length: 15 }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisMarcha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'FIS_TRASLADO', nullable: true, length: 30 }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisTraslado", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'FIS_DOLOR', nullable: true }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisDolor", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'FIS_PESO', nullable: true }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisPeso", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'FIS_TALLA', nullable: true }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisTalla", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'FIS_DISCAPACIDAD', nullable: true }),
    __metadata("design:type", Object)
], Fisioterapia.prototype, "fisDiscapacidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dolor_fisio_entity_1.Dolorfisio, (dolorfisio) => dolorfisio.idfisioterapia2),
    __metadata("design:type", Array)
], Fisioterapia.prototype, "dolorfisios", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => equilibrio_dinamico_entity_1.Equilibriodinamico, (equilibriodinamico) => equilibriodinamico.idfisioterapia2),
    __metadata("design:type", equilibrio_dinamico_entity_1.Equilibriodinamico)
], Fisioterapia.prototype, "equilibriodinamico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => equilibrio_estatico_entity_1.Equilibrioestatico, (equilibrioestatico) => equilibrioestatico.idfisioterapia2),
    __metadata("design:type", equilibrio_estatico_entity_1.Equilibrioestatico)
], Fisioterapia.prototype, "equilibrioestatico", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.fisioterapias, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], Fisioterapia.prototype, "idficha2", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => fuerza_entity_1.Fuerza, (fuerza) => fuerza.idfisioterapia2),
    __metadata("design:type", fuerza_entity_1.Fuerza)
], Fisioterapia.prototype, "fuerza", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tono_muscular_entity_1.Tonomuscular, (tonomuscular) => tonomuscular.idfisioterapia2),
    __metadata("design:type", tono_muscular_entity_1.Tonomuscular)
], Fisioterapia.prototype, "tonomuscular", void 0);
exports.Fisioterapia = Fisioterapia = __decorate([
    (0, typeorm_1.Index)('FK_FISIOTER_PACIENTE__PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Entity)('FISIOTERAPIA', { schema: 'Sirma' })
], Fisioterapia);
//# sourceMappingURL=fisioterapia.entity.js.map