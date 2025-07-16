"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCognitivoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cognitivo_dto_1 = require("./create-cognitivo.dto");
class UpdateCognitivoDto extends (0, swagger_1.PartialType)(create_cognitivo_dto_1.CreateCognitivoDto) {
}
exports.UpdateCognitivoDto = UpdateCognitivoDto;
//# sourceMappingURL=update-cognitivo.dto.js.map