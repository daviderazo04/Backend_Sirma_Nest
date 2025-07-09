// src/paciente/paciente.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InsertarFichaGeneralDTO } from './dto/insertar-ficha-general.dto';
import { FichaGeneralDto } from './dto/ficha-general.dto';

@Controller('api/pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createPacienteDto: CreatePacienteDto,
  ): Promise<Paciente> {
    return await this.pacienteService.create(createPacienteDto);
  }

  @Get()
  async findAll(): Promise<Paciente[]> {
    return await this.pacienteService.findAll();
  }
  
  @Get('fichas-generales')
  async getFichasGenerales(): Promise<FichaGeneralDto[]> {
    return await this.pacienteService.obtenerFichasGenerales();
  }

  @Get(':idficha')
  async findOne(@Param('idficha') idficha: string): Promise<Paciente> {
    return await this.pacienteService.findOne(idficha);
  }

  @Get('ficha/cedula/:cedula')
  async getFichaByCedula(@Param('cedula') cedula: string): Promise<any[]> {
    return await this.pacienteService.getPacienteByIdficha(cedula);
  }
  @Patch(':idficha')
  async update(
    @Param('idficha') idficha: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ): Promise<Paciente> {
    return await this.pacienteService.update(idficha, updatePacienteDto);
  }

  @Delete(':idficha')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminación exitosa
  async remove(@Param('idficha') idficha: string): Promise<void> {
    await this.pacienteService.remove(idficha);
  }
  @Post('insertar-ficha-general')
  @HttpCode(HttpStatus.CREATED)
  async insertarFichaGeneral(
    @Body() datos: InsertarFichaGeneralDTO,
  ): Promise<any> {
    return await this.pacienteService.insertarFichaGeneral(datos);
  }

}
