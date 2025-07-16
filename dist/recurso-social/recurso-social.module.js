"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursoSocialModule = void 0;
const common_1 = require("@nestjs/common");
const recurso_social_service_1 = require("./recurso-social.service");
const recurso_social_controller_1 = require("./recurso-social.controller");
const typeorm_1 = require("@nestjs/typeorm");
const recurso_social_entity_1 = require("./entities/recurso-social.entity");
const enfermeria_module_1 = require("../enfermeria/enfermeria.module");
let RecursoSocialModule = class RecursoSocialModule {
};
exports.RecursoSocialModule = RecursoSocialModule;
exports.RecursoSocialModule = RecursoSocialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([recurso_social_entity_1.Recursosocial]),
            (0, common_1.forwardRef)(() => enfermeria_module_1.EnfermeriaModule),
        ],
        controllers: [recurso_social_controller_1.RecursoSocialController],
        providers: [recurso_social_service_1.RecursoSocialService],
        exports: [recurso_social_service_1.RecursoSocialService],
    })
], RecursoSocialModule);
//# sourceMappingURL=recurso-social.module.js.map