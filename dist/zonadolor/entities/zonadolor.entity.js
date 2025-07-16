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
exports.Zonadolor = void 0;
const dolor_fisio_entity_1 = require("../../dolor-fisio/entities/dolor-fisio.entity");
const typeorm_1 = require("typeorm");
let Zonadolor = class Zonadolor {
    idzona;
    zonaNombre;
    dolorfisios;
};
exports.Zonadolor = Zonadolor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDZONA' }),
    __metadata("design:type", Number)
], Zonadolor.prototype, "idzona", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'ZONA_NOMBRE', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Zonadolor.prototype, "zonaNombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dolor_fisio_entity_1.Dolorfisio, (dolorfisio) => dolorfisio.idzona2),
    __metadata("design:type", Array)
], Zonadolor.prototype, "dolorfisios", void 0);
exports.Zonadolor = Zonadolor = __decorate([
    (0, typeorm_1.Entity)('ZONADOLOR', { schema: 'Sirma' })
], Zonadolor);
//# sourceMappingURL=zonadolor.entity.js.map