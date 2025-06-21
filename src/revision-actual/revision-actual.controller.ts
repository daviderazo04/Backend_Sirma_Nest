import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RevisionActualService } from './revision-actual.service';
import { CreateRevisionActualDto } from './dto/create-revision-actual.dto';
import { UpdateRevisionActualDto } from './dto/update-revision-actual.dto';

@Controller('api/revision-actual')
export class RevisionActualController {
  constructor(private readonly revisionActualService: RevisionActualService) {}

  @Post()
  create(@Body() createRevisionActualDto: CreateRevisionActualDto) {
    return this.revisionActualService.create(createRevisionActualDto);
  }

  @Get()
  findAll() {
    return this.revisionActualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revisionActualService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRevisionActualDto: UpdateRevisionActualDto,
  ) {
    return this.revisionActualService.update(+id, updateRevisionActualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revisionActualService.remove(+id);
  }
}
