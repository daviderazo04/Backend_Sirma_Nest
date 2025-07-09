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
import { EnfermeriaService } from './enfermeria.service';
import { CreateFullEnfermeriaDto } from './dto/create-full-enfermeria.dto';
import { UpdateFullEnfermeriaDto } from './dto/update-full-enfermeria.dto';
import { UpdateEnfermeriaDto } from './dto/update-enfermeria.dto';

@Controller('/api/enfermeria') // Ruta base para los endpoints de enfermería
export class EnfermeriaController {
  constructor(private readonly enfermeriaService: EnfermeriaService) {}

  // Endpoint para crear registro completo con DTO anidado
  @Post()
  async create(@Body() createFullEnfermeriaDto: CreateFullEnfermeriaDto) {
    return this.enfermeriaService.createFull(createFullEnfermeriaDto);
  }

  // Endpoint para obtener todos los registros simples
  @Get()
  async findAll(): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return await this.enfermeriaService.findAll();
  }

  // Endpoint para obtener todos los registros completos (con relaciones)
  @Get('/full')
  findAllFull() {
    return this.enfermeriaService.findAllFull();
  }

  // Endpoint para obtener un registro completo por ID (con relaciones)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.enfermeriaService.findOneFull(+id);
  }
  @Get('completa/:idEnfermeria')
  async getEnfermeriaCompleta(
    @Param('idEnfermeria') idEnfermeria: string,
  ): Promise<any> {
    return await this.enfermeriaService.obtenerEnfermeriaCompleta(+idEnfermeria);
  }

  // Endpoint para actualizar registro simple
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnfermeriaDto: UpdateEnfermeriaDto,
  ) {
    return this.enfermeriaService.update(+id, updateEnfermeriaDto);
  }

  // Endpoint para actualizar registro completo (con relaciones)
  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() updateFullEnfermeriaDto: UpdateFullEnfermeriaDto,
  ) {
    return this.enfermeriaService.updateFull(+id, updateFullEnfermeriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermeriaService.remove(+id);
  }
}
