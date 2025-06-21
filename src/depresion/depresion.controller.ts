import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepresionService } from './depresion.service';
import { CreateDepresionDto } from './dto/create-depresion.dto';
import { UpdateDepresionDto } from './dto/update-depresion.dto';

@Controller('depresion')
export class DepresionController {
  constructor(private readonly depresionService: DepresionService) {}

  @Post()
  create(@Body() createDepresionDto: CreateDepresionDto) {
    return this.depresionService.create(createDepresionDto);
  }

  @Get()
  findAll() {
    return this.depresionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depresionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepresionDto: UpdateDepresionDto,
  ) {
    return this.depresionService.update(+id, updateDepresionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depresionService.remove(+id);
  }
}
