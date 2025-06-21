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

  @Get(':idficha')
  async findOne(@Param('idficha') idficha: string): Promise<Paciente> {
    return await this.pacienteService.findOne(idficha);
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
}
