// src/persona/persona.controller.ts
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
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { PersonaFicha } from 'src/persona-ficha/entities/persona-ficha.entity';
import { Datosgenerales } from 'src/datos-generales/entities/datos-generale.entity';
import { GrupoEdadDto } from './dto/grupo-edad.dto';
@Controller('api/personas')
export class PersonaController {
  constructor(
    private readonly personaService: PersonaService,
    @InjectRepository(PersonaFicha)
    private readonly personaFichaRepository: Repository<PersonaFicha>,
    @InjectRepository(Datosgenerales)
    private readonly datosGeneralesRepository: Repository<Datosgenerales>,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPersonaDto: CreatePersonaDto): Promise<Persona> {
    return await this.personaService.create(createPersonaDto);
  }

  @Get()
  async findAll(): Promise<Persona[]> {
    return await this.personaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Persona> {
    return await this.personaService.findOne(+id);
  }
  @Get('cedula/:cedula')
  async findByCedula(@Param('cedula') cedula: string): Promise<Persona> {
    return await this.personaService.findByCedula(cedula);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonaDto: UpdatePersonaDto,
  ): Promise<Persona> {
    return await this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminación exitosa
  async remove(@Param('id') id: string): Promise<void> {
    await this.personaService.remove(+id);
  }

  @Get('datos-generales/:cedula')
  async getDatosGeneralesPorCedula(@Param('cedula') cedula: string) {
    const persona = await this.personaService.findByCedula(cedula);
    if (!persona) return null;

    const personaFichas = await this.personaFichaRepository.find({
      where: { idpersona: persona.idpersona },
      relations: ['idficha2'],
    });

    const idfichas = personaFichas.map((pf) => pf.idficha);

    const datosGenerales = await this.datosGeneralesRepository.find({
      where: { idficha: In(idfichas) },
    });

    return datosGenerales;
  }

  @Get('fichas-medicas/:cedula')
  async getFichasMedicasPorCedula(@Param('cedula') cedula: string) {
    const persona = await this.personaService.findByCedula(cedula);
    if (!persona) return null;

    // Buscar fichas asociadas a la persona
    const personaFichas = await this.personaFichaRepository.find({
      where: { idpersona: persona.idpersona },
      relations: ['idficha2'],
    });

    // Retornar las fichas médicas (puedes personalizar la respuesta)
    return personaFichas.map((pf) => pf.idficha2);
  }

  @Get('reporte/grupos-edad')
  async obtenerGruposEdad(): Promise<GrupoEdadDto[]> {
    return await this.personaService.obtenerGruposEdad();
  }

  @Get('reporte/sexo')
  async personasPorSexo() {
    return await this.personaService.personasPorSexo();
  }

  @Get('reporte/estado-civil')
  async personasPorEstadoCivil() {
    return await this.personaService.personasPorEstadoCivil();
  }

  @Get('reporte/zona')
  async personasPorZona() {
    return await this.personaService.personasPorZona();
  }

  @Get('reporte/ocupacion')
  async personasPorOcupacion() {
    return await this.personaService.personasPorOcupacion();
  }

  @Get('reporte/instruccion')
  async personasPorInstruccion() {
    return await this.personaService.personasPorInstruccion();
  }

  @Get('reporte/comunidad')
  async personasPorComunidad() {
    return await this.personaService.personasPorComunidad();
  }

  @Get('reporte/cuidador')
  async personasPorCuidador() {
    return await this.personaService.personasPorCuidador();
  }
}
