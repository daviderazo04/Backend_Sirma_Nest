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
exports.CreateFullEnfermeriaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_act_basica_nested_dto_1 = require("../../act-basicas/dto/create-act-basica-nested.dto");
const create_act_instrumental_nested_dto_1 = require("../../act-instrumental/dto/create-act-instrumental-nested.dto");
const create_cognitivo_nested_dto_1 = require("../../cognitivo/dto/create-cognitivo-nested.dto");
const create_depresion_nested_dto_1 = require("../../depresion/dto/create-depresion-nested.dto");
const create_otros_riesgo_nested_dto_1 = require("../../otros-riesgos/dto/create-otros-riesgo-nested.dto");
const create_recurso_social_nested_dto_1 = require("../../recurso-social/dto/create-recurso-social-nested.dto");
const create_tamizaje_nested_dto_1 = require("../../tamizaje/dto/create-tamizaje-nested.dto");
class CreateFullEnfermeriaDto {
    idficha;
    enfNombreencuestador;
    enfObservaciones;
    actbasica;
    actinstrumental;
    cognitivo;
    depresion;
    otrosriesgos;
    recursosocial;
    tamizaje;
}
exports.CreateFullEnfermeriaDto = CreateFullEnfermeriaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFullEnfermeriaDto.prototype, "idficha", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateFullEnfermeriaDto.prototype, "enfNombreencuestador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    __metadata("design:type", String)
], CreateFullEnfermeriaDto.prototype, "enfObservaciones", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_act_basica_nested_dto_1.CreateActBasicaNestedDto),
    __metadata("design:type", create_act_basica_nested_dto_1.CreateActBasicaNestedDto)
], CreateFullEnfermeriaDto.prototype, "actbasica", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_act_instrumental_nested_dto_1.CreateActInstrumentalNestedDto),
    __metadata("design:type", create_act_instrumental_nested_dto_1.CreateActInstrumentalNestedDto)
], CreateFullEnfermeriaDto.prototype, "actinstrumental", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_cognitivo_nested_dto_1.CreateCognitivoNestedDto),
    __metadata("design:type", create_cognitivo_nested_dto_1.CreateCognitivoNestedDto)
], CreateFullEnfermeriaDto.prototype, "cognitivo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_depresion_nested_dto_1.CreateDepresionNestedDto),
    __metadata("design:type", create_depresion_nested_dto_1.CreateDepresionNestedDto)
], CreateFullEnfermeriaDto.prototype, "depresion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_otros_riesgo_nested_dto_1.CreateOtrosRiesgoNestedDto),
    __metadata("design:type", create_otros_riesgo_nested_dto_1.CreateOtrosRiesgoNestedDto)
], CreateFullEnfermeriaDto.prototype, "otrosriesgos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_recurso_social_nested_dto_1.CreateRecursoSocialNestedDto),
    __metadata("design:type", create_recurso_social_nested_dto_1.CreateRecursoSocialNestedDto)
], CreateFullEnfermeriaDto.prototype, "recursosocial", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_tamizaje_nested_dto_1.CreateTamizajeNestedDto),
    __metadata("design:type", create_tamizaje_nested_dto_1.CreateTamizajeNestedDto)
], CreateFullEnfermeriaDto.prototype, "tamizaje", void 0);
//# sourceMappingURL=create-full-enfermeria.dto.js.map