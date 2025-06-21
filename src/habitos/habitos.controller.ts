import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { HabitoService } from './habitos.service';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';

@Controller('api/habitos-nocivos')
export class HabitosController {
  constructor(private readonly habitosService: HabitoService) {}

  @Post()
  create(@Body() createHabitoDto: CreateHabitoDto) {
    return this.habitosService.create(createHabitoDto);
  }

  @Get()
  findAll() {
    return this.habitosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHabitoDto: UpdateHabitoDto) {
    return this.habitosService.update(+id, updateHabitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitosService.remove(+id);
  }
}
