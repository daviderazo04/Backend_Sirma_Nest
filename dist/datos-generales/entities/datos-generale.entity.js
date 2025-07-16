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
exports.Datosgenerales = void 0;
const paciente_entity_1 = require("../../paciente/entities/paciente.entity");
const typeorm_1 = require("typeorm");
let Datosgenerales = class Datosgenerales {
    iddatosgenerales;
    dgNombreencuestador;
    dgPasAcostado;
    dgPadAcostado;
    dgPasSentado;
    dgPadSentado;
    dgDiagnosticoha;
    dgPulsopormin;
    dgDiagnosticopulso;
    dgFrecrespiratoria;
    dgDiagnosticofr;
    dgSaturacion;
    dgDiagnosticosaturacion;
    dgTemperatura;
    dgDiagnosticotemperatura;
    dgFirmaconcentimiento;
    dgFirmamedicina;
    dgFirmaenfermeria;
    dgFirmanutricion;
    dgFirmafisioterapia;
    idficha;
};
exports.Datosgenerales = Datosgenerales;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDDATOSGENERALES' }),
    __metadata("design:type", Number)
], Datosgenerales.prototype, "iddatosgenerales", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'DG_NOMBREENCUESTADOR',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgNombreencuestador", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'DG_PAS_ACOSTADO',
        nullable: true,
        comment: 'Presión arterial sistólica del paciente mientras está acostado',
        precision: 5,
        scale: 2,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgPasAcostado", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'DG_PAD_ACOSTADO',
        nullable: true,
        comment: 'Presión arterial diastólica del paciente mientras está acostado',
        precision: 5,
        scale: 2,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgPadAcostado", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'DG_PAS_SENTADO',
        nullable: true,
        comment: 'Presión arterial sistólica del paciente mientras está sentado',
        precision: 5,
        scale: 2,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgPasSentado", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'DG_PAD_SENTADO',
        nullable: true,
        comment: 'Presión arterial diastólica del paciente mientras está sentado',
        precision: 5,
        scale: 2,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgPadSentado", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        name: 'DG_DIAGNOSTICOHA',
        nullable: true,
        comment: 'Diagnóstico sobre la hipertensión arterial del paciente',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgDiagnosticoha", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', {
        name: 'DG_PULSOPORMIN',
        nullable: true,
        comment: 'Pulso por minuto del paciente',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgPulsopormin", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        name: 'DG_DIAGNOSTICOPULSO',
        nullable: true,
        comment: 'Diagnóstico del pulso',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgDiagnosticopulso", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', {
        name: 'DG_FRECRESPIRATORIA',
        nullable: true,
        comment: 'Frecuencia respiratoria por minuto del paciente ',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgFrecrespiratoria", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        name: 'DG_DIAGNOSTICOFR',
        nullable: true,
        comment: 'Diagnóstico de la frecuencia respiratoria',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgDiagnosticofr", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', {
        name: 'DG_SATURACION',
        nullable: true,
        comment: 'Saturación en sangre del paciente ',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgSaturacion", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        name: 'DG_DIAGNOSTICOSATURACION',
        nullable: true,
        comment: 'Diagnóstico de saturación',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgDiagnosticosaturacion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'DG_TEMPERATURA',
        nullable: true,
        comment: 'Temperatura en grados celcius del paciente ',
        precision: 3,
        scale: 1,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgTemperatura", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        name: 'DG_DIAGNOSTICOTEMPERATURA',
        nullable: true,
        comment: 'Diagnóstico de la temperatura',
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgDiagnosticotemperatura", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'DG_FIRMACONCENTIMIENTO',
        nullable: true,
        comment: 'Firma que ratifica el concentimiento del paciente con el uso de sus datos',
        width: 1,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgFirmaconcentimiento", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'DG_FIRMAMEDICINA',
        nullable: true,
        comment: 'Firma de que fue revisado por medicina',
        width: 1,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgFirmamedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'DG_FIRMAENFERMERIA',
        nullable: true,
        comment: 'Firma de que fue revisado por enfermería',
        width: 1,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgFirmaenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'DG_FIRMANUTRICION',
        nullable: true,
        comment: 'Firma de que fue revisado por nutrición',
        width: 1,
    }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgFirmanutricion", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'DG_FIRMAFISIOTERAPIA', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Datosgenerales.prototype, "dgFirmafisioterapia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, (paciente) => paciente.datosgenerales, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDFICHA', referencedColumnName: 'idficha' }]),
    __metadata("design:type", paciente_entity_1.Paciente)
], Datosgenerales.prototype, "idficha", void 0);
exports.Datosgenerales = Datosgenerales = __decorate([
    (0, typeorm_1.Index)('FK_DATOSGEN_PACIENTE__PACIENTE', ['idficha'], {}),
    (0, typeorm_1.Entity)('DATOSGENERALES', { schema: 'Sirma' })
], Datosgenerales);
//# sourceMappingURL=datos-generale.entity.js.map