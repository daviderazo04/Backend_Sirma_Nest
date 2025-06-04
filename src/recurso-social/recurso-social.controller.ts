import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoSocialService } from './recurso-social.service';
import { CreateRecursoSocialDto } from './dto/create-recurso-social.dto';
import { UpdateRecursoSocialDto } from './dto/update-recurso-social.dto';

@Controller('recurso-social')
export class RecursoSocialController {
  constructor(private readonly recursoSocialService: RecursoSocialService) {}

  @Post()
  create(@Body() createRecursoSocialDto: CreateRecursoSocialDto) {
    return this.recursoSocialService.create(createRecursoSocialDto);
  }

  @Get()
  findAll() {
    return this.recursoSocialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoSocialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoSocialDto: UpdateRecursoSocialDto) {
    return this.recursoSocialService.update(+id, updateRecursoSocialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoSocialService.remove(+id);
  }
}
