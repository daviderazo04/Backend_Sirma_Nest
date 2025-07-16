"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicinaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_medicina_dto_1 = require("./create-medicina.dto");
class UpdateMedicinaDto extends (0, swagger_1.PartialType)(create_medicina_dto_1.CreateMedicinaDto) {
}
exports.UpdateMedicinaDto = UpdateMedicinaDto;
//# sourceMappingURL=update-medicina.dto.js.map