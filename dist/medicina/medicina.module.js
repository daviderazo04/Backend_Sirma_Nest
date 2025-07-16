"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicinaModule = void 0;
const common_1 = require("@nestjs/common");
const medicina_service_1 = require("./medicina.service");
const medicina_controller_1 = require("./medicina.controller");
const typeorm_1 = require("@nestjs/typeorm");
const medicina_entity_1 = require("./entities/medicina.entity");
const paciente_module_1 = require("../paciente/paciente.module");
const alerta_module_1 = require("../alerta/alerta.module");
const andrologico_module_1 = require("../andrologico/andrologico.module");
const antecedentes_familiares_module_1 = require("../antecedentes-familiares/antecedentes-familiares.module");
const diagnostico_module_1 = require("../diagnostico/diagnostico.module");
const examen_regional_module_1 = require("../examen-regional/examen-regional.module");
const examen_sistemico_module_1 = require("../examen-sistemico/examen-sistemico.module");
const farmacologico_module_1 = require("../farmacologico/farmacologico.module");
const general_module_1 = require("../general/general.module");
const ginecologico_module_1 = require("../ginecologico/ginecologico.module");
const habitos_module_1 = require("../habitos/habitos.module");
const patologico_module_1 = require("../patologico/patologico.module");
const revision_actual_module_1 = require("../revision-actual/revision-actual.module");
const sindromes_geriatricos_module_1 = require("../sindromes-geriatricos/sindromes-geriatricos.module");
let MedicinaModule = class MedicinaModule {
};
exports.MedicinaModule = MedicinaModule;
exports.MedicinaModule = MedicinaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([medicina_entity_1.Medicina]),
            paciente_module_1.PacienteModule,
            (0, common_1.forwardRef)(() => alerta_module_1.AlertaModule),
            (0, common_1.forwardRef)(() => andrologico_module_1.AndrologicoModule),
            (0, common_1.forwardRef)(() => antecedentes_familiares_module_1.AntecedentesFamiliaresModule),
            (0, common_1.forwardRef)(() => diagnostico_module_1.DiagnosticoModule),
            (0, common_1.forwardRef)(() => examen_regional_module_1.ExamenRegionalModule),
            (0, common_1.forwardRef)(() => examen_sistemico_module_1.ExamenSistemicoModule),
            (0, common_1.forwardRef)(() => farmacologico_module_1.FarmacologicoModule),
            (0, common_1.forwardRef)(() => general_module_1.GeneralModule),
            (0, common_1.forwardRef)(() => ginecologico_module_1.GinecologicoModule),
            (0, common_1.forwardRef)(() => habitos_module_1.HabitosModule),
            (0, common_1.forwardRef)(() => patologico_module_1.PatologicoModule),
            (0, common_1.forwardRef)(() => revision_actual_module_1.RevisionActualModule),
            (0, common_1.forwardRef)(() => sindromes_geriatricos_module_1.SindromesGeriatricosModule),
        ],
        controllers: [medicina_controller_1.MedicinaController],
        providers: [medicina_service_1.MedicinaService],
        exports: [medicina_service_1.MedicinaService],
    })
], MedicinaModule);
//# sourceMappingURL=medicina.module.js.map