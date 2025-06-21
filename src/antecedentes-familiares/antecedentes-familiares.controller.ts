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
import { AntecedentesfamiliaresService } from './antecedentes-familiares.service';
import { CreateAntecedentesFamiliareDto } from './dto/create-antecedentes-familiare.dto';
import { UpdateAntecedentesFamiliareDto } from './dto/update-antecedentes-familiare.dto';

@Controller('api/antecedentes-familiares')
export class AntecedentesFamiliaresController {
  constructor(
    private readonly antecedentesFamiliaresService: AntecedentesfamiliaresService,
  ) {}

  @Post()
  create(
    @Body() createAntecedentesFamiliareDto: CreateAntecedentesFamiliareDto,
  ) {
    return this.antecedentesFamiliaresService.create(
      createAntecedentesFamiliareDto,
    );
  }

  @Get()
  findAll() {
    return this.antecedentesFamiliaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antecedentesFamiliaresService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAntecedentesFamiliareDto: UpdateAntecedentesFamiliareDto,
  ) {
    return this.antecedentesFamiliaresService.update(
      +id,
      updateAntecedentesFamiliareDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antecedentesFamiliaresService.remove(+id);
  }
}
