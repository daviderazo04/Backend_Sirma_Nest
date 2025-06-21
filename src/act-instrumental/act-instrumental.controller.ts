import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActInstrumentalService } from './act-instrumental.service';
import { CreateActInstrumentalDto } from './dto/create-act-instrumental.dto';
import { UpdateActInstrumentalDto } from './dto/update-act-instrumental.dto';

@Controller('act-instrumental')
export class ActInstrumentalController {
  constructor(
    private readonly actInstrumentalService: ActInstrumentalService,
  ) {}

  @Post()
  create(@Body() createActInstrumentalDto: CreateActInstrumentalDto) {
    return this.actInstrumentalService.create(createActInstrumentalDto);
  }

  @Get()
  findAll() {
    return this.actInstrumentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actInstrumentalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActInstrumentalDto: UpdateActInstrumentalDto,
  ) {
    return this.actInstrumentalService.update(+id, updateActInstrumentalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actInstrumentalService.remove(+id);
  }
}
