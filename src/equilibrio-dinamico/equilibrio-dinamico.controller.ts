import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EquilibrioDinamicoService } from './equilibrio-dinamico.service';
import { CreateEquilibrioDinamicoDto } from './dto/create-equilibrio-dinamico.dto';
import { UpdateEquilibrioDinamicoDto } from './dto/update-equilibrio-dinamico.dto';

@Controller('equilibrio-dinamico')
export class EquilibrioDinamicoController {
  constructor(
    private readonly equilibrioDinamicoService: EquilibrioDinamicoService,
  ) {}

  @Post()
  create(@Body() createEquilibrioDinamicoDto: CreateEquilibrioDinamicoDto) {
    return this.equilibrioDinamicoService.create(createEquilibrioDinamicoDto);
  }

  @Get()
  findAll() {
    return this.equilibrioDinamicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equilibrioDinamicoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEquilibrioDinamicoDto: UpdateEquilibrioDinamicoDto,
  ) {
    return this.equilibrioDinamicoService.update(
      +id,
      updateEquilibrioDinamicoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equilibrioDinamicoService.remove(+id);
  }
}
