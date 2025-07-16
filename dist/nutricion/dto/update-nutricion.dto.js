"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNutricionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_nutricion_dto_1 = require("./create-nutricion.dto");
class UpdateNutricionDto extends (0, swagger_1.PartialType)(create_nutricion_dto_1.CreateNutricionDto) {
}
exports.UpdateNutricionDto = UpdateNutricionDto;
//# sourceMappingURL=update-nutricion.dto.js.map