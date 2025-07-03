import { Controller, Post, Body } from '@nestjs/common';
import { NutricioncompletoService } from './nutricioncompleto.service';
import { CreateNutricionCompletoDto } from './dto/create-nutricioncompleto.dto';

@Controller('nutricioncompleto')
export class NutricioncompletoController {
  constructor(private readonly service: NutricioncompletoService) {}

  @Post()
  async crear(@Body() dto: CreateNutricionCompletoDto) {
    return await this.service.crear(dto);
  }
}
