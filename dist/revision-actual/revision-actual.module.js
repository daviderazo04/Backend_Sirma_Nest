"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevisionActualModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const revision_actual_service_1 = require("./revision-actual.service");
const revision_actual_controller_1 = require("./revision-actual.controller");
const revision_actual_entity_1 = require("./entities/revision-actual.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let RevisionActualModule = class RevisionActualModule {
};
exports.RevisionActualModule = RevisionActualModule;
exports.RevisionActualModule = RevisionActualModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([revision_actual_entity_1.Revisionactual]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [revision_actual_controller_1.RevisionActualController],
        providers: [revision_actual_service_1.RevisionActualService],
        exports: [revision_actual_service_1.RevisionActualService],
    })
], RevisionActualModule);
//# sourceMappingURL=revision-actual.module.js.map