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
import { FarmacologicoService } from './farmacologico.service';
import { CreateFarmacologicoDto } from './dto/create-farmacologico.dto';
import { UpdateFarmacologicoDto } from './dto/update-farmacologico.dto';

@Controller('api/farmacologico')
export class FarmacologicoController {
  constructor(private readonly farmacologicoService: FarmacologicoService) {}

  @Post()
  create(@Body() createFarmacologicoDto: CreateFarmacologicoDto) {
    return this.farmacologicoService.create(createFarmacologicoDto);
  }

  @Get()
  findAll() {
    return this.farmacologicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmacologicoService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFarmacologicoDto: UpdateFarmacologicoDto,
  ) {
    return this.farmacologicoService.update(+id, updateFarmacologicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmacologicoService.remove(+id);
  }
}
