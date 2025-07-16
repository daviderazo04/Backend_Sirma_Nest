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
exports.Enfermeria = void 0;
const act_basica_entity_1 = require("../../act-basicas/entities/act-basica.entity");
const act_instrumental_entity_1 = require("../../act-instrumental/entities/act-instrumental.entity");
const cognitivo_entity_1 = require("../../cognitivo/entities/cognitivo.entity");
const depresion_entity_1 = require("../../depresion/entities/depresion.entity");
const otros_riesgo_entity_1 = require("../../otros-riesgos/entities/otros-riesgo.entity");
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const recurso_social_entity_1 = require("../../recurso-social/entities/recurso-social.entity");
const tamizaje_entity_1 = require("../../tamizaje/entities/tamizaje.entity");
const typeorm_1 = require("typeorm");
let Enfermeria = class Enfermeria {
    idenfermeria;
    idficha;
    enfNombreencuestador;
    enfObservaciones;
    actbasica;
    actinstrumental;
    cognitivo;
    depresion;
    idficha2;
    otrosriesgos;
    recursosocial;
    tamizaje;
};
exports.Enfermeria = Enfermeria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Enfermeria.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IDFICHA', length: 6 }),
    __metadata("design:type", String)
], Enfermeria.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ENF_NOMBREENCUESTADOR',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Enfermeria.prototype, "enfNombreencuestador", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'ENF_OBSERVACIONES',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", Object)
], Enfermeria.prototype, "enfObservaciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => act_basica_entity_1.Actbasicas, (actbasicas) => actbasicas.idenfermeria2),
    __metadata("design:type", act_basica_entity_1.Actbasicas)
], Enfermeria.prototype, "actbasica", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => act_instrumental_entity_1.Actinstrumental, (actinstrumental) => actinstrumental.idenfermeria2),
    __metadata("design:type", act_instrumental_entity_1.Actinstrumental)
], Enfermeria.prototype, "actinstrumental", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cognitivo_entity_1.Cognitivo, (cognitivo) => cognitivo.idenfermeria2),
    __metadata("design:type", cognitivo_entity_1.Cognitivo)
], Enfermeria.prototype, "cognitivo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => depresion_entity_1.Depresion, (depresion) => depresion.idenfermeria2),
    __metadata("design:type", depresion_entity_1.Depresion)
], Enfermeria.prototype, "depresion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.enfermerias, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], Enfermeria.prototype, "idficha2", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => otros_riesgo_entity_1.Otrosriesgos, (otrosriesgos) => otrosriesgos.idenfermeria2),
    __metadata("design:type", otros_riesgo_entity_1.Otrosriesgos)
], Enfermeria.prototype, "otrosriesgos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => recurso_social_entity_1.Recursosocial, (recursosocial) => recursosocial.idenfermeria2),
    __metadata("design:type", recurso_social_entity_1.Recursosocial)
], Enfermeria.prototype, "recursosocial", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => tamizaje_entity_1.Tamizaje, (tamizaje) => tamizaje.idenfermeria2),
    __metadata("design:type", tamizaje_entity_1.Tamizaje)
], Enfermeria.prototype, "tamizaje", void 0);
exports.Enfermeria = Enfermeria = __decorate([
    (0, typeorm_1.Index)('FK_ENFERMER_PACIENTE__PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Entity)('ENFERMERIA', { schema: 'Sirma' })
], Enfermeria);
//# sourceMappingURL=enfermeria.entity.js.map