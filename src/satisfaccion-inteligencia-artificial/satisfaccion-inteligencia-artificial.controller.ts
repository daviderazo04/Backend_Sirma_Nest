import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SatisfaccionInteligenciaArtificialService } from './satisfaccion-inteligencia-artificial.service';
import { CreateSatisfaccionInteligenciaArtificialDto } from './dto/create-satisfaccion-inteligencia-artificial.dto';

@Controller('satisfaccion-inteligencia-artificial')
export class SatisfaccionInteligenciaArtificialController {
  constructor(private readonly service: SatisfaccionInteligenciaArtificialService) {}

  @Post()
  create(@Body() createDto: CreateSatisfaccionInteligenciaArtificialDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('grafica')
  getGrafica() {
    return this.service.getCalificacionesChart();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}