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
exports.CreateFullMedicinaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_alerta_nested_dto_1 = require("../../alerta/dto/create-alerta-nested.dto");
const create_andrologico_nested_dto_1 = require("../../andrologico/dto/create-andrologico-nested.dto");
const create_antecedentes_familiares_nested_dto_1 = require("../../antecedentes-familiares/dto/create-antecedentes-familiares-nested.dto");
const create_diagnostico_nested_dto_1 = require("../../diagnostico/dto/create-diagnostico-nested.dto");
const create_examen_regional_nested_dto_1 = require("../../examen-regional/dto/create-examen-regional-nested.dto");
const create_examen_sistemico_nested_dto_1 = require("../../examen-sistemico/dto/create-examen-sistemico-nested.dto");
const create_farmacologico_nested_dto_1 = require("../../farmacologico/dto/create-farmacologico-nested.dto");
const create_general_nested_dto_1 = require("../../general/dto/create-general-nested.dto");
const create_ginecologico_nested_dto_1 = require("../../ginecologico/dto/create-ginecologico-nested.dto");
const create_habito_nested_dto_1 = require("../../habitos/dto/create-habito-nested.dto");
const create_patologico_nested_dto_1 = require("../../patologico/dto/create-patologico-nested.dto");
const create_revision_actual_nested_dto_1 = require("../../revision-actual/dto/create-revision-actual-nested.dto");
const create_sindromes_geriatrico_nested_dto_1 = require("../../sindromes-geriatricos/dto/create-sindromes-geriatrico-nested.dto");
class CreateFullMedicinaDto {
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
    patologico;
    revisionactual;
    sindromesgeriatricos;
}
exports.CreateFullMedicinaDto = CreateFullMedicinaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 6),
    __metadata("design:type", String)
], CreateFullMedicinaDto.prototype, "idficha", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateFullMedicinaDto.prototype, "medNombreencuestador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    __metadata("design:type", String)
], CreateFullMedicinaDto.prototype, "medAnamnesis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    __metadata("design:type", String)
], CreateFullMedicinaDto.prototype, "medObservacionesrevact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    __metadata("design:type", String)
], CreateFullMedicinaDto.prototype, "medObservacionexamenes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    __metadata("design:type", String)
], CreateFullMedicinaDto.prototype, "medPlanintegral", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_alerta_nested_dto_1.CreateAlertaNestedDto),
    __metadata("design:type", create_alerta_nested_dto_1.CreateAlertaNestedDto)
], CreateFullMedicinaDto.prototype, "alerta", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_andrologico_nested_dto_1.CreateAndrologicoNestedDto),
    __metadata("design:type", create_andrologico_nested_dto_1.CreateAndrologicoNestedDto)
], CreateFullMedicinaDto.prototype, "andrologico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_antecedentes_familiares_nested_dto_1.CreateAntecedentesFamiliareNestedDto),
    __metadata("design:type", create_antecedentes_familiares_nested_dto_1.CreateAntecedentesFamiliareNestedDto)
], CreateFullMedicinaDto.prototype, "antecedentesfamiliares", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_diagnostico_nested_dto_1.CreateDiagnosticoNestedDto),
    __metadata("design:type", create_diagnostico_nested_dto_1.CreateDiagnosticoNestedDto)
], CreateFullMedicinaDto.prototype, "diagnostico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_examen_regional_nested_dto_1.CreateExamenRegionalNestedDto),
    __metadata("design:type", create_examen_regional_nested_dto_1.CreateExamenRegionalNestedDto)
], CreateFullMedicinaDto.prototype, "examenregional", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_examen_sistemico_nested_dto_1.CreateExamenSistemicoNestedDto),
    __metadata("design:type", create_examen_sistemico_nested_dto_1.CreateExamenSistemicoNestedDto)
], CreateFullMedicinaDto.prototype, "examensistemico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_farmacologico_nested_dto_1.CreateFarmacologicoNestedDto),
    __metadata("design:type", create_farmacologico_nested_dto_1.CreateFarmacologicoNestedDto)
], CreateFullMedicinaDto.prototype, "farmacologico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_general_nested_dto_1.CreateGeneralNestedDto),
    __metadata("design:type", create_general_nested_dto_1.CreateGeneralNestedDto)
], CreateFullMedicinaDto.prototype, "general", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_ginecologico_nested_dto_1.CreateGinecologicoNestedDto),
    __metadata("design:type", create_ginecologico_nested_dto_1.CreateGinecologicoNestedDto)
], CreateFullMedicinaDto.prototype, "ginecologico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_habito_nested_dto_1.CreateHabitoNestedDto),
    __metadata("design:type", create_habito_nested_dto_1.CreateHabitoNestedDto)
], CreateFullMedicinaDto.prototype, "habitosnocivos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_patologico_nested_dto_1.CreatePatologicoNestedDto),
    __metadata("design:type", create_patologico_nested_dto_1.CreatePatologicoNestedDto)
], CreateFullMedicinaDto.prototype, "patologico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_revision_actual_nested_dto_1.CreateRevisionActualNestedDto),
    __metadata("design:type", create_revision_actual_nested_dto_1.CreateRevisionActualNestedDto)
], CreateFullMedicinaDto.prototype, "revisionactual", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_sindromes_geriatrico_nested_dto_1.CreateSindromesGeriatricoNestedDto),
    __metadata("design:type", create_sindromes_geriatrico_nested_dto_1.CreateSindromesGeriatricoNestedDto)
], CreateFullMedicinaDto.prototype, "sindromesgeriatricos", void 0);
//# sourceMappingURL=create-full-medicina.dto.js.map