// src/cribaje/cribaje.controller.ts
import { Controller, Post, Body, Get, Param, ParseIntPipe, HttpStatus, Delete, Put } from '@nestjs/common';
import { CribajeService } from './cribaje.service';
import { CreateCribajeDto } from './dto/create-cribaje.dto';
import { Cribaje } from './entities/cribaje.entity';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { UpdateCribajeDto } from './dto/update-cribaje.dto';

@ApiTags('Cribaje') // Etiqueta para la documentación de Swagger
@Controller('cribaje')
export class CribajeController {
  constructor(private readonly cribajeService: CribajeService) {}

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo registro de cribaje' })
  @ApiBody({ type: CreateCribajeDto, description: 'Datos para crear un nuevo cribaje' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'El cribaje ha sido creado exitosamente.',
    type: Cribaje,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'La Nutricion asociada no fue encontrada.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Ya existe un registro de Cribaje para la Nutricion especificada.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  async create(@Body() createCribajeDto: CreateCribajeDto): Promise<Cribaje> {
    return this.cribajeService.create(createCribajeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los registros de cribaje' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de todos los registros de cribaje.',
    type: [Cribaje],
  })
  async findAll(): Promise<Cribaje[]> {
    return this.cribajeService.findAll();
  }

  @Get(':idnutricion')
  @ApiOperation({ summary: 'Obtiene un registro de cribaje por su ID de nutrición' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Registro de cribaje encontrado.',
    type: Cribaje,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Cribaje no encontrado.',
  })
  async findOne(@Param('idnutricion', ParseIntPipe) idnutricion: number): Promise<Cribaje> {
    return this.cribajeService.findOne(idnutricion);
  }

  @Put(':idnutricion')
  @ApiOperation({ summary: 'Actualiza un registro de cribaje existente' })
  @ApiBody({ type: UpdateCribajeDto, description: 'Datos para actualizar el cribaje' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'El cribaje ha sido actualizado exitosamente.',
    type: Cribaje,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Cribaje no encontrado.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'No se permite cambiar el ID de Nutricion de un cribaje existente.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos de entrada inválidos.',
  })
  async update(
    @Param('idnutricion', ParseIntPipe) idnutricion: number,
    @Body() updateCribajeDto: UpdateCribajeDto,
  ): Promise<Cribaje> {
    return this.cribajeService.update(idnutricion, updateCribajeDto);
  }

  @Delete(':idnutricion')
  @ApiOperation({ summary: 'Elimina un registro de cribaje' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT, // Usar 204 No Content para eliminaciones exitosas sin cuerpo de respuesta
    description: 'El cribaje ha sido eliminado exitosamente.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Cribaje no encontrado.',
  })
  async remove(@Param('idnutricion', ParseIntPipe) idnutricion: number): Promise<void> {
    await this.cribajeService.remove(idnutricion);
  }
}
