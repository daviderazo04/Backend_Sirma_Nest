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
exports.Medicina = void 0;
const alerta_entity_1 = require("../../alerta/entities/alerta.entity");
const andrologico_entity_1 = require("../../andrologico/entities/andrologico.entity");
const antecedentes_familiare_entity_1 = require("../../antecedentes-familiares/entities/antecedentes-familiare.entity");
const diagnostico_entity_1 = require("../../diagnostico/entities/diagnostico.entity");
const examen_regional_entity_1 = require("../../examen-regional/entities/examen-regional.entity");
const examen_sistemico_entity_1 = require("../../examen-sistemico/entities/examen-sistemico.entity");
const farmacologico_entity_1 = require("../../farmacologico/entities/farmacologico.entity");
const general_entity_1 = require("../../general/entities/general.entity");
const ginecologico_entity_1 = require("../../ginecologico/entities/ginecologico.entity");
const habito_entity_1 = require("../../habitos/entities/habito.entity");
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const patologico_entity_1 = require("../../patologico/entities/patologico.entity");
const revision_actual_entity_1 = require("../../revision-actual/entities/revision-actual.entity");
const sindromes_geriatrico_entity_1 = require("../../sindromes-geriatricos/entities/sindromes-geriatrico.entity");
const typeorm_1 = require("typeorm");
let Medicina = class Medicina {
    idmedicina;
    idficha;
    medNombreencuestador;
    medAnamnesis;
    medObservacionesrevact;
    medObservacionexamenes;
    medPlanintegral;
    alerta;
    andrologico;
    antecedentesfamiliares;
    diagnostico;
    examenregional;
    examensistemico;
    farmacologico;
    general;
    ginecologico;
    habitosnocivos;
    idficha2;
    patologico;
    revisionactual;
    sindromesgeriatricos;
};
exports.Medicina = Medicina;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDMEDICINA' }),
    __metadata("design:type", Number)
], Medicina.prototype, "idmedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'IDFICHA', length: 6 }),
    __metadata("design:type", String)
], Medicina.prototype, "idficha", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'MED_NOMBREENCUESTADOR',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Medicina.prototype, "medNombreencuestador", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'MED_ANAMNESIS', nullable: true }),
    __metadata("design:type", Object)
], Medicina.prototype, "medAnamnesis", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'MED_OBSERVACIONESREVACT', nullable: true }),
    __metadata("design:type", Object)
], Medicina.prototype, "medObservacionesrevact", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'MED_OBSERVACIONEXAMENES', nullable: true }),
    __metadata("design:type", Object)
], Medicina.prototype, "medObservacionexamenes", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'MED_PLANINTEGRAL', nullable: true }),
    __metadata("design:type", Object)
], Medicina.prototype, "medPlanintegral", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => alerta_entity_1.Alerta, (alerta) => alerta.idmedicina2),
    __metadata("design:type", alerta_entity_1.Alerta)
], Medicina.prototype, "alerta", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => andrologico_entity_1.Andrologico, (andrologico) => andrologico.idmedicina2),
    __metadata("design:type", andrologico_entity_1.Andrologico)
], Medicina.prototype, "andrologico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => antecedentes_familiare_entity_1.Antecedentesfamiliares, (antecedentesfamiliares) => antecedentesfamiliares.idmedicina2),
    __metadata("design:type", antecedentes_familiare_entity_1.Antecedentesfamiliares)
], Medicina.prototype, "antecedentesfamiliares", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => diagnostico_entity_1.Diagnostico, (diagnostico) => diagnostico.idmedicina2),
    __metadata("design:type", diagnostico_entity_1.Diagnostico)
], Medicina.prototype, "diagnostico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => examen_regional_entity_1.Examenregional, (examenregional) => examenregional.idmedicina2),
    __metadata("design:type", examen_regional_entity_1.Examenregional)
], Medicina.prototype, "examenregional", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => examen_sistemico_entity_1.Examensistemico, (examensistemico) => examensistemico.idmedicina2),
    __metadata("design:type", examen_sistemico_entity_1.Examensistemico)
], Medicina.prototype, "examensistemico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => farmacologico_entity_1.Farmacologico, (farmacologico) => farmacologico.idmedicina2),
    __metadata("design:type", farmacologico_entity_1.Farmacologico)
], Medicina.prototype, "farmacologico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => general_entity_1.General, (general) => general.idmedicina2),
    __metadata("design:type", general_entity_1.General)
], Medicina.prototype, "general", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ginecologico_entity_1.Ginecologico, (ginecologico) => ginecologico.idmedicina2),
    __metadata("design:type", ginecologico_entity_1.Ginecologico)
], Medicina.prototype, "ginecologico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => habito_entity_1.Habitos, (habitosnocivos) => habitosnocivos.idmedicina2),
    __metadata("design:type", habito_entity_1.Habitos)
], Medicina.prototype, "habitosnocivos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.medicinas, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], Medicina.prototype, "idficha2", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => patologico_entity_1.Patologico, (patologico) => patologico.idmedicina2),
    __metadata("design:type", patologico_entity_1.Patologico)
], Medicina.prototype, "patologico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => revision_actual_entity_1.Revisionactual, (revisionactual) => revisionactual.idmedicina2),
    __metadata("design:type", revision_actual_entity_1.Revisionactual)
], Medicina.prototype, "revisionactual", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => sindromes_geriatrico_entity_1.Sindromesgeriatricos, (sindromesgeriatricos) => sindromesgeriatricos.idmedicina2),
    __metadata("design:type", sindromes_geriatrico_entity_1.Sindromesgeriatricos)
], Medicina.prototype, "sindromesgeriatricos", void 0);
exports.Medicina = Medicina = __decorate([
    (0, typeorm_1.Index)('FK_MEDICINA_PACIENTE__PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Entity)('MEDICINA', { schema: 'Sirma' })
], Medicina);
//# sourceMappingURL=medicina.entity.js.map