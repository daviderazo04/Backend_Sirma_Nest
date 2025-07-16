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
exports.Actinstrumental = void 0;
const enfermeria_entity_1 = require("../../enfermeria/entities/enfermeria.entity");
const typeorm_1 = require("typeorm");
let Actinstrumental = class Actinstrumental {
    idenfermeria;
    aiCuidacasa;
    aiUsatelefono;
    aiMediotransporte;
    aiPreparacomida;
    aiLavaropa;
    aiVacompras;
    aiManejadinero;
    aiManejamedicina;
    aiTotal;
    idenfermeria2;
};
exports.Actinstrumental = Actinstrumental;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'IDENFERMERIA' }),
    __metadata("design:type", Number)
], Actinstrumental.prototype, "idenfermeria", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_CUIDACASA', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiCuidacasa", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_USATELEFONO', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiUsatelefono", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_MEDIOTRANSPORTE', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiMediotransporte", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_PREPARACOMIDA', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiPreparacomida", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_LAVAROPA', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiLavaropa", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_VACOMPRAS', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiVacompras", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_MANEJADINERO', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiManejadinero", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_MANEJAMEDICINA', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiManejamedicina", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'AI_TOTAL', nullable: true }),
    __metadata("design:type", Object)
], Actinstrumental.prototype, "aiTotal", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => enfermeria_entity_1.Enfermeria, (enfermeria) => enfermeria.actinstrumental, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }]),
    __metadata("design:type", enfermeria_entity_1.Enfermeria)
], Actinstrumental.prototype, "idenfermeria2", void 0);
exports.Actinstrumental = Actinstrumental = __decorate([
    (0, typeorm_1.Entity)('ACTINSTRUMENTAL', { schema: 'Sirma' })
], Actinstrumental);
//# sourceMappingURL=act-instrumental.entity.js.map