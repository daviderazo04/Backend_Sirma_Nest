// src/nutricion/nutricion.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { NutricionService } from './nutricion.service';
import { CreateNutricionDto } from './dto/create-nutricion.dto';
import { UpdateNutricionDto } from './dto/update-nutricion.dto';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';
import { Nutricion } from './entities/nutricion.entity';

@ApiTags('nutricion') // Etiqueta para agrupar endpoints en Swagger UI
@Controller('nutricion')
export class NutricionController {
  constructor(private readonly nutricionService: NutricionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Código de estado 201 para creación
  @ApiOperation({ summary: 'Crear un nuevo registro de nutrición' })
  @ApiBody({ type: CreateNutricionDto, description: 'Datos para crear el registro de nutrición' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'El registro de nutrición ha sido creado exitosamente.',
    type: Nutricion, // Si tienes la entidad aquí, puedes usarla para la respuesta
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  async create(@Body() createNutricionDto: CreateNutricionDto) {
    return this.nutricionService.create(createNutricionDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener todos los registros de nutrición' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de todos los registros de nutrición.',
    type: [Nutricion],
  })
  async findAll() {
    return this.nutricionService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener un registro de nutrición por ID' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID del registro de nutrición',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'El registro de nutrición encontrado por ID.',
    type: Nutricion,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Registro de nutrición no encontrado.',
  })
  async findOne(@Param('id') id: string) {
    return this.nutricionService.findOne(+id);
  }

  @Patch(':id') // Se usa Patch para actualizaciones parciales
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Actualizar un registro de nutrición existente' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID del registro de nutrición a actualizar',
  })
  @ApiBody({
    type: UpdateNutricionDto,
    description: 'Datos para actualizar el registro de nutrición (parciales)',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'El registro de nutrición ha sido actualizado exitosamente.',
    type: Nutricion,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Registro de nutrición no encontrado.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  async update(@Param('id') id: string, @Body() updateNutricionDto: UpdateNutricionDto) {
    return this.nutricionService.update(+id, updateNutricionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Código de estado 204 para eliminación exitosa sin contenido
  @ApiOperation({ summary: 'Eliminar un registro de nutrición' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID del registro de nutrición a eliminar',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'El registro de nutrición ha sido eliminado exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Registro de nutrición no encontrado.',
  })
  async remove(@Param('id') id: string) {
    await this.nutricionService.remove(+id);
  }
}
