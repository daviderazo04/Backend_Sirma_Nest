import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AntecedentesNutriService } from './antecedentes-nutri.service';
import { CreateAntecedentesNutriDto } from './dto/create-antecedentes-nutri.dto';
import { UpdateAntecedentesNutriDto } from './dto/update-antecedentes-nutri.dto';

@Controller('antecedentes-nutri')
export class AntecedentesNutriController {
  constructor(
    private readonly antecedentesNutriService: AntecedentesNutriService,
  ) {}

  @Post()
  create(@Body() createAntecedentesNutriDto: CreateAntecedentesNutriDto) {
    return this.antecedentesNutriService.create(createAntecedentesNutriDto);
  }

  @Get()
  findAll() {
    return this.antecedentesNutriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antecedentesNutriService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAntecedentesNutriDto: UpdateAntecedentesNutriDto,
  ) {
    return this.antecedentesNutriService.update(
      +id,
      updateAntecedentesNutriDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antecedentesNutriService.remove(+id);
  }
}
