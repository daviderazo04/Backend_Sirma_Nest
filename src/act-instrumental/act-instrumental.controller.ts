import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { ActInstrumentalService } from './act-instrumental.service';
import { CreateActInstrumentalDto } from './dto/create-act-instrumental.dto';
import { UpdateActInstrumentalDto } from './dto/update-act-instrumental.dto';

@Controller('api/actinstrumental')
export class ActInstrumentalController {
  constructor(
    private readonly actInstrumentalService: ActInstrumentalService,
  ) {}

  @Post()
  create(@Body() dto: CreateActInstrumentalDto) {
    return this.actInstrumentalService.create(dto);
  }

  @Get()
  findAll() {
    return this.actInstrumentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.actInstrumentalService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateActInstrumentalDto,
  ) {
    return this.actInstrumentalService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.actInstrumentalService.remove(id);
  }
}
