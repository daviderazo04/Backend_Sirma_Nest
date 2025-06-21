import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZonadolorService } from './zonadolor.service';
import { CreateZonadolorDto } from './dto/create-zonadolor.dto';
import { UpdateZonadolorDto } from './dto/update-zonadolor.dto';

@Controller('zonadolor')
export class ZonadolorController {
  constructor(private readonly zonadolorService: ZonadolorService) {}

  @Post()
  create(@Body() createZonadolorDto: CreateZonadolorDto) {
    return this.zonadolorService.create(createZonadolorDto);
  }

  @Get()
  findAll() {
    return this.zonadolorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zonadolorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateZonadolorDto: UpdateZonadolorDto,
  ) {
    return this.zonadolorService.update(+id, updateZonadolorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zonadolorService.remove(+id);
  }
}
