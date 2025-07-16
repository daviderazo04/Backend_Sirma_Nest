"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepresionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_depresion_dto_1 = require("./create-depresion.dto");
class UpdateDepresionDto extends (0, swagger_1.PartialType)(create_depresion_dto_1.CreateDepresionDto) {
}
exports.UpdateDepresionDto = UpdateDepresionDto;
//# sourceMappingURL=update-depresion.dto.js.map