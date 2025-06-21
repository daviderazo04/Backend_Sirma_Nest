import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TonoMuscularService } from './tono-muscular.service';
import { CreateTonoMuscularDto } from './dto/create-tono-muscular.dto';
import { UpdateTonoMuscularDto } from './dto/update-tono-muscular.dto';

@Controller('tono-muscular')
export class TonoMuscularController {
  constructor(private readonly tonoMuscularService: TonoMuscularService) {}

  @Post()
  create(@Body() createTonoMuscularDto: CreateTonoMuscularDto) {
    return this.tonoMuscularService.create(createTonoMuscularDto);
  }

  @Get()
  findAll() {
    return this.tonoMuscularService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tonoMuscularService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTonoMuscularDto: UpdateTonoMuscularDto,
  ) {
    return this.tonoMuscularService.update(+id, updateTonoMuscularDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tonoMuscularService.remove(+id);
  }
}
