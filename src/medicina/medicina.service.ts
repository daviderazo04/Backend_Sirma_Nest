/*import { Injectable } from '@nestjs/common';
import { CreateMedicinaDto } from './dto/create-medicina.dto';
import { UpdateMedicinaDto } from './dto/update-medicina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicina } from './entities/medicina.entity';
import { Repository } from 'typeorm';
import { PacienteService } from '../paciente/paciente.service';  // Importar PacienteService


@Injectable()
export class MedicinaService {
  constructor(
    @InjectRepository(Medicina)
    private medicinaRepository: Repository<Medicina>,
    private pacienteService: PacienteService,  // Repositorio de Paciente
  ) {}

  async create(createMedicinaDto: CreateMedicinaDto) {
    // Verificar que `idFicha` no sea undefined
    if (!createMedicinaDto.idficha) {
      throw new Error('idFicha is required');  // Lanza un error si idFicha no está presente
    }

    const paciente = await this.pacienteService.findOne(createMedicinaDto.idficha);  // Usar el servicio de paciente

    if (!paciente) {
      throw new Error('Paciente not found');
    }

    const medicina = this.medicinaRepository.create({
      ...createMedicinaDto,
      idficha2: paciente,  // Asignar el paciente encontrado a la relación idficha2
    });

    return await this.medicinaRepository.save(medicina);  // Guardar la nueva medicina
  }

  async findAll() {
    return await this.medicinaRepository.find(); // Obtener todas las medicinas
  }

  async findOne(id: number) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } }); // Buscar por ID
    if (!medicina) {
      throw new Error('Medicina not found');
    }
    return medicina;
  }

  async update(id: number, updateMedicinaDto: UpdateMedicinaDto) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } }); // Buscar por ID
    if (!medicina) {
      throw new Error('Medicina not found');
    }

    // Actualizar los campos con los datos nuevos
    Object.assign(medicina, updateMedicinaDto); // Copia de los datos actualizados
    return await this.medicinaRepository.save(medicina); // Guardar los cambios
  }

  async remove(id: number) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } }); // Buscar por ID
    if (!medicina) {
      throw new Error('Medicina not found');
    }
    return await this.medicinaRepository.remove(medicina); // Eliminar de la base de datos
  }
}*/

// src/medicina/medicina.service.ts
import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicinaDto } from './dto/create-medicina.dto';
import { UpdateMedicinaDto } from './dto/update-medicina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicina } from './entities/medicina.entity';
import { Repository } from 'typeorm';
import { PacienteService } from '../paciente/paciente.service';
import { CreateFullMedicinaDto } from './dto/create-full-medicina.dto'; // Import the new DTO

// Import all related services
import { AlertaService } from '../alerta/alerta.service';
import { AndrologicoService } from '../andrologico/andrologico.service';
import { AntecedentesfamiliaresService } from '../antecedentes-familiares/antecedentes-familiares.service';
import { DiagnosticoService } from '../diagnostico/diagnostico.service';
import { ExamenRegionalService } from '../examen-regional/examen-regional.service';
import { ExamenSistemicoService } from '../examen-sistemico/examen-sistemico.service';
import { FarmacologicoService } from '../farmacologico/farmacologico.service';
import { GeneralService } from '../general/general.service';
import { GinecologicoService } from '../ginecologico/ginecologico.service';
import { HabitoService } from '../habitos/habitos.service';
import { PatologicoService } from '../patologico/patologico.service';
import { RevisionActualService } from '../revision-actual/revision-actual.service';
import { SindromesGeriatricosService } from '../sindromes-geriatricos/sindromes-geriatricos.service';


@Injectable()
export class MedicinaService {
  constructor(
    @InjectRepository(Medicina)
    private medicinaRepository: Repository<Medicina>,
    private pacienteService: PacienteService,
    @Inject(forwardRef(() => AlertaService))
    private alertaService: AlertaService,
    @Inject(forwardRef(() => AndrologicoService))
    private andrologicoService: AndrologicoService,
    @Inject(forwardRef(() => AntecedentesfamiliaresService))
    private antecedentesfamiliaresService: AntecedentesfamiliaresService,
    @Inject(forwardRef(() => DiagnosticoService))
    private diagnosticoService: DiagnosticoService,
    @Inject(forwardRef(() => ExamenRegionalService))
    private examenRegionalService: ExamenRegionalService,
    @Inject(forwardRef(() => ExamenSistemicoService))
    private examenSistemicoService: ExamenSistemicoService,
    @Inject(forwardRef(() => FarmacologicoService))
    private farmacologicoService: FarmacologicoService,
    @Inject(forwardRef(() => GeneralService))
    private generalService: GeneralService,
    @Inject(forwardRef(() => GinecologicoService))
    private ginecologicoService: GinecologicoService,
    @Inject(forwardRef(() => HabitoService))
    private habitosService: HabitoService,
    @Inject(forwardRef(() => PatologicoService))
    private patologicoService: PatologicoService,
    @Inject(forwardRef(() => RevisionActualService))
    private revisionActualService: RevisionActualService,
    @Inject(forwardRef(() => SindromesGeriatricosService))
    private sindromesGeriatricosService: SindromesGeriatricosService,
  ) {}

  // Your existing create method (might be removed or renamed if this is the primary create)
  async create(createMedicinaDto: CreateMedicinaDto) {
    if (!createMedicinaDto.idficha) {
      throw new NotFoundException('idFicha is required');
    }

    const paciente = await this.pacienteService.findOne(createMedicinaDto.idficha);

    if (!paciente) {
      throw new NotFoundException('Paciente not found');
    }

    const medicina = this.medicinaRepository.create({
      ...createMedicinaDto,
      idficha2: paciente,
    });

    return await this.medicinaRepository.save(medicina);
  }

  // --- NEW METHOD TO HANDLE FULL CREATION ---
  async createFull(createFullMedicinaDto: CreateFullMedicinaDto) {
    const { idficha, ...medicinaFields } = createFullMedicinaDto;
    const {
      alerta, andrologico, antecedentesfamiliares, diagnostico,
      examenregional, examensistemico, farmacologico, general,
      ginecologico, habitosnocivos, patologico, revisionactual,
      sindromesgeriatricos
    } = medicinaFields;

    // 1. Find the Paciente
    const paciente = await this.pacienteService.findOne(idficha);
    if (!paciente) {
      throw new NotFoundException(`Paciente with ID ${idficha} not found.`);
    }

    // 2. Create the main Medicina record
    const medicinaToSave = this.medicinaRepository.create({
      idficha,
      medNombreencuestador: medicinaFields.medNombreencuestador,
      medAnamnesis: medicinaFields.medAnamnesis,
      medObservacionesrevact: medicinaFields.medObservacionesrevact,
      medObservacionexamenes: medicinaFields.medObservacionexamenes,
      medPlanintegral: medicinaFields.medPlanintegral,
      idficha2: paciente,
    });

    const newMedicina = await this.medicinaRepository.save(medicinaToSave);

    // 3. Create related records using their services and the new Medicina's ID
    const medicinaId = newMedicina.idmedicina;

    // Handle each optional nested DTO
    if (alerta) {
      await this.alertaService.create({ idmedicina: medicinaId, ...alerta });
    }
    if (andrologico) {
      await this.andrologicoService.create({ idmedicina: medicinaId, ...andrologico });
    }
    if (antecedentesfamiliares) {
      await this.antecedentesfamiliaresService.create({ idmedicina: medicinaId, ...antecedentesfamiliares });
    }
    if (diagnostico) {
      await this.diagnosticoService.create({ idmedicina: medicinaId, ...diagnostico });
    }
    if (examenregional) {
      await this.examenRegionalService.create({ idmedicina: medicinaId, ...examenregional });
    }
    if (examensistemico) {
      await this.examenSistemicoService.create({ idmedicina: medicinaId, ...examensistemico });
    }
    if (farmacologico) {
      await this.farmacologicoService.create({ idmedicina: medicinaId, ...farmacologico });
    }
    if (general) {
      await this.generalService.create({ idmedicina: medicinaId, ...general });
    }
    if (ginecologico) {
      await this.ginecologicoService.create({ idmedicina: medicinaId, ...ginecologico });
    }
    if (habitosnocivos) {
      await this.habitosService.create({ idmedicina: medicinaId, ...habitosnocivos });
    }
    if (patologico) {
      await this.patologicoService.create({ idmedicina: medicinaId, ...patologico });
    }
    if (revisionactual) {
      await this.revisionActualService.create({ idmedicina: medicinaId, ...revisionactual });
    }
    if (sindromesgeriatricos) {
      await this.sindromesGeriatricosService.create({ idmedicina: medicinaId, ...sindromesgeriatricos });
    }

    // You might want to return the fully loaded Medicina object or just the newly created Medicina itself
    return this.findOne(medicinaId); // Re-fetch the complete Medicina record with all relations
  }


  async findAll() {
    return await this.medicinaRepository.find();
  }

  async findOne(id: number) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } });
    if (!medicina) {
      throw new NotFoundException('Medicina not found');
    }
    return medicina;
  }

  async update(id: number, updateMedicinaDto: UpdateMedicinaDto) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } });
    if (!medicina) {
      throw new NotFoundException('Medicina not found');
    }

    Object.assign(medicina, updateMedicinaDto);
    return await this.medicinaRepository.save(medicina);
  }

  async remove(id: number) {
    const medicina = await this.medicinaRepository.findOne({ where: { idmedicina: id } });
    if (!medicina) {
      throw new NotFoundException('Medicina not found');
    }
    return await this.medicinaRepository.remove(medicina);
  }
}
