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
exports.Dolorfisio = void 0;
const fisioterapia_entity_1 = require("../../fisioterapia/entities/fisioterapia.entity");
const zonadolor_entity_1 = require("../../zonadolor/entities/zonadolor.entity");
const typeorm_1 = require("typeorm");
let Dolorfisio = class Dolorfisio {
    iddolorfisio;
    idzona;
    idfisioterapia;
    zonaDuele;
    idfisioterapia2;
    idzona2;
};
exports.Dolorfisio = Dolorfisio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDDOLORFISIO' }),
    __metadata("design:type", Number)
], Dolorfisio.prototype, "iddolorfisio", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IDZONA', nullable: true }),
    __metadata("design:type", Object)
], Dolorfisio.prototype, "idzona", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'IDFISIOTERAPIA', nullable: true }),
    __metadata("design:type", Object)
], Dolorfisio.prototype, "idfisioterapia", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'ZONA_DUELE', nullable: true, width: 1 }),
    __metadata("design:type", Object)
], Dolorfisio.prototype, "zonaDuele", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => fisioterapia_entity_1.Fisioterapia, (fisioterapia) => fisioterapia.dolorfisios, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([
        { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
    ]),
    __metadata("design:type", fisioterapia_entity_1.Fisioterapia)
], Dolorfisio.prototype, "idfisioterapia2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => zonadolor_entity_1.Zonadolor, (zonadolor) => zonadolor.dolorfisios, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'IDZONA', referencedColumnName: 'idzona' }]),
    __metadata("design:type", zonadolor_entity_1.Zonadolor)
], Dolorfisio.prototype, "idzona2", void 0);
exports.Dolorfisio = Dolorfisio = __decorate([
    (0, typeorm_1.Index)('FK_DOLORFIS_RELATIONS_ZONADOLO', ['idzona'], {}),
    (0, typeorm_1.Index)('FK_DOLORFIS_RELATIONS_FISIOTER', ['idfisioterapia'], {}),
    (0, typeorm_1.Entity)('DOLORFISIO', { schema: 'Sirma' })
], Dolorfisio);
//# sourceMappingURL=dolor-fisio.entity.js.map