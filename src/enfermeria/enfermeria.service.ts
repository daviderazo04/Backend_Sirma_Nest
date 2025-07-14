import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enfermeria } from './entities/enfermeria.entity';
import { PacienteService } from '../paciente/paciente.service';
import { CreateEnfermeriaDto } from './dto/create-enfermeria.dto';
import { CreateFullEnfermeriaDto } from './dto/create-full-enfermeria.dto';
import { UpdateFullEnfermeriaDto } from './dto/update-full-enfermeria.dto';
import { UpdateEnfermeriaDto } from './dto/update-enfermeria.dto';
// Importa los servicios relacionados
import { ActBasicasService } from '../act-basicas/act-basicas.service';
import { ActInstrumentalService } from '../act-instrumental/act-instrumental.service';
import { CognitivoService } from '../cognitivo/cognitivo.service';
import { DepresionService } from '../depresion/depresion.service';
import { OtrosRiesgosService } from '../otros-riesgos/otros-riesgos.service';
import { RecursoSocialService } from '../recurso-social/recurso-social.service';
import { TamizajeService } from '../tamizaje/tamizaje.service';

@Injectable()
export class EnfermeriaService {
  constructor(
    @InjectRepository(Enfermeria)
    private enfermeriaRepository: Repository<Enfermeria>,
    private pacienteService: PacienteService,
    @Inject(forwardRef(() => ActBasicasService))
    private actBasicasService: ActBasicasService,
    @Inject(forwardRef(() => ActInstrumentalService))
    private actInstrumentalService: ActInstrumentalService,
    @Inject(forwardRef(() => CognitivoService))
    private cognitivoService: CognitivoService,
    @Inject(forwardRef(() => DepresionService))
    private depresionService: DepresionService,
    @Inject(forwardRef(() => OtrosRiesgosService))
    private otrosRiesgosService: OtrosRiesgosService,
    @Inject(forwardRef(() => RecursoSocialService))
    private recursoSocialService: RecursoSocialService,
    @Inject(forwardRef(() => TamizajeService))
    private tamizajeService: TamizajeService,
  ) {}

  async create(createEnfermeriaDto: CreateEnfermeriaDto): Promise<Enfermeria> {
    if (!createEnfermeriaDto.idficha) {
      throw new NotFoundException(
        'ID de Ficha (Paciente) es requerido para crear un registro de Enfermería.',
      );
    }

    const paciente = await this.pacienteService.findOne(
      createEnfermeriaDto.idficha,
    );
    if (!paciente) {
      throw new NotFoundException(
        `Paciente con ID de Ficha ${createEnfermeriaDto.idficha} no encontrado.`,
      );
    }

    const enfermeria = this.enfermeriaRepository.create({
      ...createEnfermeriaDto,
      idficha2: paciente,
    });

    return await this.enfermeriaRepository.save(enfermeria);
  }

  async createFull(createFullEnfermeriaDto: CreateFullEnfermeriaDto) {
    const { idficha, ...enfermeriaFields } = createFullEnfermeriaDto;
    const {
      actbasica,
      actinstrumental,
      cognitivo,
      depresion,
      otrosriesgos,
      recursosocial,
      tamizaje,
    } = enfermeriaFields;

    const paciente = await this.pacienteService.findOne(idficha);
    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${idficha} no encontrado.`);
    }

    const enfermeriaToSave = this.enfermeriaRepository.create({
      idficha,
      enfNombreencuestador: enfermeriaFields.enfNombreencuestador,
      enfObservaciones: enfermeriaFields.enfObservaciones,
      idficha2: paciente,
    });

    const savedEnfermeria =
      await this.enfermeriaRepository.save(enfermeriaToSave);
    const idenfermeria = savedEnfermeria.idenfermeria;

    if (actbasica) {
      await this.actBasicasService.create({ idenfermeria, ...actbasica });
    }
    if (actinstrumental) {
      await this.actInstrumentalService.create({
        idenfermeria,
        aiCuidaCasa: actinstrumental.aiCuidacasa ?? 0,
        aiUsaTelefono: actinstrumental.aiUsatelefono ?? 0,
        aiMediosTransporte: actinstrumental.aiMediotransporte ?? 0,
        aiPreparaComida: actinstrumental.aiPreparacomida ?? 0,
        aiLavaRopa: actinstrumental.aiLavaropa ?? 0,
        aiVaCompras: actinstrumental.aiVacompras ?? 0,
        aiManejaDinero: actinstrumental.aiManejadinero ?? 0,
        aiManejaMedicina: actinstrumental.aiManejamedicina ?? 0,
        aiTotales: actinstrumental.aiTotal ?? 0,
      });
    }
    if (cognitivo) {
      await this.cognitivoService.create({
        idenfermeria,
        cogSabeFecha: cognitivo.cogSabefecha ?? 0,
        cogAprendeDeTres: cognitivo.cogAprendetres ?? 0,
        cogRepiteAlreves: cognitivo.cogRepitealreves ?? 0,
        cogTomaDoblaColoca: cognitivo.cogTomadoblacoloca ?? 0,
        cogRepitePalabras: cognitivo.cogRepitepalabras ?? 0,
        cogCopiaCirculos: cognitivo.cogCopiacirculos ?? 0,
        cogTotal: cognitivo.cogTotal ?? 0,
      });
    }
    if (depresion) {
      // Convert number fields to boolean as required by CreateDepresionDto
      const depresionDto = {
        idenfermeria,
        depSatisfechovida:
          depresion.depSatisfechovida !== undefined
            ? Boolean(depresion.depSatisfechovida)
            : undefined,
        depDejaactinteres:
          depresion.depDejaactinteres !== undefined
            ? Boolean(depresion.depDejaactinteres)
            : undefined,
        depVidavacia:
          depresion.depVidavacia !== undefined
            ? Boolean(depresion.depVidavacia)
            : undefined,
        depAburrefrecuencia:
          depresion.depAburrefrecuencia !== undefined
            ? Boolean(depresion.depAburrefrecuencia)
            : undefined,
        depBuenanimo:
          depresion.depBuenanimo !== undefined
            ? Boolean(depresion.depBuenanimo)
            : undefined,
        depAlgomalosuceder:
          depresion.depAlgomalosuceder !== undefined
            ? Boolean(depresion.depAlgomalosuceder)
            : undefined,
        depFelizmayortiempo:
          depresion.depFelizmayortiempo !== undefined
            ? Boolean(depresion.depFelizmayortiempo)
            : undefined,
        depDesamparado:
          depresion.depDesamparado !== undefined
            ? Boolean(depresion.depDesamparado)
            : undefined,
        depTotal: depresion.depTotal,
      };
      await this.depresionService.create(depresionDto);
    }
    if (otrosriesgos) {
      await this.otrosRiesgosService.create({
        idenfermeria,
        orGrupoEdad: otrosriesgos.orGrupoedad ?? 0,
        orViveCon: otrosriesgos.orVivecon ?? 0,
        orMovilidad: otrosriesgos.orMovilidad ?? 0,
        orEnfermedadAguda: otrosriesgos.orEnfermedadaguda ?? 0,
        orNeuropsico: otrosriesgos.orNeuropsico ?? 0,
        orTotal: otrosriesgos.orTotal ?? 0,
      });
    }
    if (recursosocial) {
      await this.recursoSocialService.create({
        idenfermeria,
        rsViveCon: recursosocial.rsVivecon ?? 0,
        rsContactoSocial: recursosocial.rsContactosocial ?? 0,
        rsApoyoRedes: recursosocial.rsApoyored ?? 0,
        rsTotal: recursosocial.rsTotal ?? 0,
      });
    }
    if (tamizaje) {
      await this.tamizajeService.create({
        idenfermeria,
        tamDifvisual:
          tamizaje.tamDifvisual !== undefined
            ? Boolean(tamizaje.tamDifvisual)
            : undefined,
        tamDifauditiva:
          tamizaje.tamDifauditiva !== undefined
            ? Boolean(tamizaje.tamDifauditiva)
            : undefined,
        tamLevanteanda:
          tamizaje.tamLevanteanda !== undefined
            ? Boolean(tamizaje.tamLevanteanda)
            : undefined,
        tamPerdidaorina:
          tamizaje.tamPerdidaorina !== undefined
            ? Boolean(tamizaje.tamPerdidaorina)
            : undefined,
        tamPerdidapeso:
          tamizaje.tamPerdidapeso !== undefined
            ? Boolean(tamizaje.tamPerdidapeso)
            : undefined,
        tamPerdidamemoria:
          tamizaje.tamPerdidamemoria !== undefined
            ? Boolean(tamizaje.tamPerdidamemoria)
            : undefined,
        tamTristedeprimido:
          tamizaje.tamTristedeprimido !== undefined
            ? Boolean(tamizaje.tamTristedeprimido)
            : undefined,
        tamBanarsolo:
          tamizaje.tamBanarsolo !== undefined
            ? Boolean(tamizaje.tamBanarsolo)
            : undefined,
        tamComprasolo:
          tamizaje.tamComprasolo !== undefined
            ? Boolean(tamizaje.tamComprasolo)
            : undefined,
        tamVivesolo:
          tamizaje.tamVivesolo !== undefined
            ? Boolean(tamizaje.tamVivesolo)
            : undefined,
        tamTotal: tamizaje.tamTotal,
      });
    }

    return this.findOneFull(idenfermeria);
  }
  async findOne(id: number) {
    const enfermeria = await this.enfermeriaRepository.findOne({
      where: { idenfermeria: id },
    });
    if (!enfermeria) {
      throw new NotFoundException('Medicina not found');
    }
    return enfermeria;
  }
  async findOneFull(id: number): Promise<Enfermeria> {
    const enfermeria = await this.enfermeriaRepository.findOne({
      where: { idenfermeria: id },
      relations: [
        'actbasica',
        'actinstrumental',
        'cognitivo',
        'depresion',
        'otrosriesgos',
        'recursosocial',
        'tamizaje',
        'idficha2',
      ],
    });
    if (!enfermeria) {
      throw new NotFoundException(
        `Registro de Enfermería con ID ${id} no encontrado.`,
      );
    }
    return enfermeria;
  }
  async findAll() {
    return await this.enfermeriaRepository.find();
  }
  async findAllFull(): Promise<Enfermeria[]> {
    return await this.enfermeriaRepository.find({
      relations: [
        'actbasica',
        'actinstrumental',
        'cognitivo',
        'depresion',
        'otrosriesgos',
        'recursosocial',
        'tamizaje',
        'idficha2',
      ],
    });
  }
  async remove(id: number) {
    const enfermeria = await this.enfermeriaRepository.findOne({
      where: { idenfermeria: id },
    });
    if (!enfermeria) {
      throw new NotFoundException('Medicina not found');
    }
    return await this.enfermeriaRepository.remove(enfermeria);
  }
  async update(id: number, UpdateEnfermeriaDto: UpdateEnfermeriaDto) {
    const enfermeria = await this.enfermeriaRepository.findOne({
      where: { idenfermeria: id },
    });
    if (!enfermeria) {
      throw new NotFoundException('Medicina not found');
    }

    Object.assign(enfermeria, UpdateEnfermeriaDto);
    return await this.enfermeriaRepository.save(enfermeria);
  }
  async updateFull(
    id: number,
    updateFullEnfermeriaDto: UpdateFullEnfermeriaDto,
  ): Promise<Enfermeria> {
    const { idficha, ...enfermeriaFields } = updateFullEnfermeriaDto;
    const {
      actbasica,
      actinstrumental,
      cognitivo,
      depresion,
      otrosriesgos,
      recursosocial,
      tamizaje,
    } = enfermeriaFields;

    const existingEnfermeria = await this.enfermeriaRepository.findOne({
      where: { idenfermeria: id },
      relations: [
        'actbasica',
        'actinstrumental',
        'cognitivo',
        'depresion',
        'otrosriesgos',
        'recursosocial',
        'tamizaje',
        'idficha2',
      ],
    });

    if (!existingEnfermeria) {
      throw new NotFoundException(`Enfermería con ID ${id} no encontrada.`);
    }

    if (idficha && Number(existingEnfermeria.idficha) !== Number(idficha)) {
      const newPaciente = await this.pacienteService.findOne(String(idficha));
      if (!newPaciente) {
        throw new NotFoundException(
          `Nuevo Paciente con ID ${idficha} no encontrado para la actualización.`,
        );
      }
      existingEnfermeria.idficha = String(idficha);
      existingEnfermeria.idficha2 = newPaciente;
    }

    Object.assign(existingEnfermeria, {
      enfNombreencuestador:
        enfermeriaFields.enfNombreencuestador ??
        existingEnfermeria.enfNombreencuestador,
      enfObservaciones:
        enfermeriaFields.enfObservaciones ??
        existingEnfermeria.enfObservaciones,
    });

    const updatedEnfermeria =
      await this.enfermeriaRepository.save(existingEnfermeria);
    const idenfermeria = updatedEnfermeria.idenfermeria;

    if (actbasica) {
      if (existingEnfermeria.actbasica) {
        await this.actBasicasService.update(idenfermeria, actbasica);
      } else {
        await this.actBasicasService.create({
          idenfermeria,
          ...actbasica,
        });
      }
    }
    if (actinstrumental) {
      if (existingEnfermeria.actinstrumental) {
        // Convertir del DTO nested al DTO de update
        const updateDto = {
          aiCuidaCasa: actinstrumental.aiCuidacasa,
          aiUsaTelefono: actinstrumental.aiUsatelefono,
          aiMediosTransporte: actinstrumental.aiMediotransporte,
          aiPreparaComida: actinstrumental.aiPreparacomida,
          aiLavaRopa: actinstrumental.aiLavaropa,
          aiVaCompras: actinstrumental.aiVacompras,
          aiManejaDinero: actinstrumental.aiManejadinero,
          aiManejaMedicina: actinstrumental.aiManejamedicina,
          aiTotales: actinstrumental.aiTotal,
        };
        await this.actInstrumentalService.update(idenfermeria, updateDto);
      } else {
        await this.actInstrumentalService.create({
          idenfermeria,
          aiCuidaCasa: actinstrumental.aiCuidacasa ?? 0,
          aiUsaTelefono: actinstrumental.aiUsatelefono ?? 0,
          aiMediosTransporte: actinstrumental.aiMediotransporte ?? 0,
          aiPreparaComida: actinstrumental.aiPreparacomida ?? 0,
          aiLavaRopa: actinstrumental.aiLavaropa ?? 0,
          aiVaCompras: actinstrumental.aiVacompras ?? 0,
          aiManejaDinero: actinstrumental.aiManejadinero ?? 0,
          aiManejaMedicina: actinstrumental.aiManejamedicina ?? 0,
          aiTotales: actinstrumental.aiTotal ?? 0,
        });
      }
    }
    if (cognitivo) {
      if (existingEnfermeria.cognitivo) {
        const updateDto = {
          cogSabeFecha: cognitivo.cogSabefecha,
          cogAprendeDeTres: cognitivo.cogAprendetres,
          cogRepiteAlreves: cognitivo.cogRepitealreves,
          cogTomaDoblaColoca: cognitivo.cogTomadoblacoloca,
          cogRepitePalabras: cognitivo.cogRepitepalabras,
          cogCopiaCirculos: cognitivo.cogCopiacirculos,
          cogTotal: cognitivo.cogTotal,
        };
        await this.cognitivoService.update(idenfermeria, updateDto);
      } else {
        await this.cognitivoService.create({
          idenfermeria,
          cogSabeFecha: cognitivo.cogSabefecha ?? 0,
          cogAprendeDeTres: cognitivo.cogAprendetres ?? 0,
          cogRepiteAlreves: cognitivo.cogRepitealreves ?? 0,
          cogTomaDoblaColoca: cognitivo.cogTomadoblacoloca ?? 0,
          cogRepitePalabras: cognitivo.cogRepitepalabras ?? 0,
          cogCopiaCirculos: cognitivo.cogCopiacirculos ?? 0,
          cogTotal: cognitivo.cogTotal ?? 0,
        });
      }
    }
    if (depresion) {
      if (existingEnfermeria.depresion) {
        // Convert number fields to boolean as required by UpdateDepresionDto
        const depresionDto = {
          depSatisfechovida:
            depresion.depSatisfechovida !== undefined
              ? Boolean(depresion.depSatisfechovida)
              : undefined,
          depDejaactinteres:
            depresion.depDejaactinteres !== undefined
              ? Boolean(depresion.depDejaactinteres)
              : undefined,
          depVidavacia:
            depresion.depVidavacia !== undefined
              ? Boolean(depresion.depVidavacia)
              : undefined,
          depAburrefrecuencia:
            depresion.depAburrefrecuencia !== undefined
              ? Boolean(depresion.depAburrefrecuencia)
              : undefined,
          depBuenanimo:
            depresion.depBuenanimo !== undefined
              ? Boolean(depresion.depBuenanimo)
              : undefined,
          depAlgomalosuceder:
            depresion.depAlgomalosuceder !== undefined
              ? Boolean(depresion.depAlgomalosuceder)
              : undefined,
          depFelizmayortiempo:
            depresion.depFelizmayortiempo !== undefined
              ? Boolean(depresion.depFelizmayortiempo)
              : undefined,
          depDesamparado:
            depresion.depDesamparado !== undefined
              ? Boolean(depresion.depDesamparado)
              : undefined,
          depTotal: depresion.depTotal,
        };
        await this.depresionService.update(idenfermeria, depresionDto);
      } else {
        // Convert number fields to boolean as required by CreateDepresionDto
        const depresionDto = {
          idenfermeria,
          depSatisfechovida:
            depresion.depSatisfechovida !== undefined
              ? Boolean(depresion.depSatisfechovida)
              : undefined,
          depDejaactinteres:
            depresion.depDejaactinteres !== undefined
              ? Boolean(depresion.depDejaactinteres)
              : undefined,
          depVidavacia:
            depresion.depVidavacia !== undefined
              ? Boolean(depresion.depVidavacia)
              : undefined,
          depAburrefrecuencia:
            depresion.depAburrefrecuencia !== undefined
              ? Boolean(depresion.depAburrefrecuencia)
              : undefined,
          depBuenanimo:
            depresion.depBuenanimo !== undefined
              ? Boolean(depresion.depBuenanimo)
              : undefined,
          depAlgomalosuceder:
            depresion.depAlgomalosuceder !== undefined
              ? Boolean(depresion.depAlgomalosuceder)
              : undefined,
          depFelizmayortiempo:
            depresion.depFelizmayortiempo !== undefined
              ? Boolean(depresion.depFelizmayortiempo)
              : undefined,
          depDesamparado:
            depresion.depDesamparado !== undefined
              ? Boolean(depresion.depDesamparado)
              : undefined,
          depTotal: depresion.depTotal,
        };
        await this.depresionService.create(depresionDto);
      }
    }
    if (otrosriesgos) {
      if (existingEnfermeria.otrosriesgos) {
        await this.otrosRiesgosService.update(idenfermeria, otrosriesgos);
      } else {
        await this.otrosRiesgosService.create({
          idenfermeria,
          orGrupoEdad: otrosriesgos.orGrupoedad ?? 0,
          orViveCon: otrosriesgos.orVivecon ?? 0,
          orMovilidad: otrosriesgos.orMovilidad ?? 0,
          orEnfermedadAguda: otrosriesgos.orEnfermedadaguda ?? 0,
          orNeuropsico: otrosriesgos.orNeuropsico ?? 0,
          orTotal: otrosriesgos.orTotal ?? 0,
        });
      }
    }
    if (recursosocial) {
      if (existingEnfermeria.recursosocial) {
        await this.recursoSocialService.update(idenfermeria, recursosocial);
      } else {
        await this.recursoSocialService.create({
          idenfermeria,
          rsViveCon: recursosocial.rsVivecon ?? 0,
          rsContactoSocial: recursosocial.rsContactosocial ?? 0,
          rsApoyoRedes: recursosocial.rsApoyored ?? 0,
          rsTotal: recursosocial.rsTotal ?? 0,
        });
      }
    }
    if (tamizaje) {
      if (existingEnfermeria.tamizaje) {
        await this.tamizajeService.update(idenfermeria, {
          tamDifvisual:
            tamizaje.tamDifvisual !== undefined
              ? Boolean(tamizaje.tamDifvisual)
              : undefined,
          tamDifauditiva:
            tamizaje.tamDifauditiva !== undefined
              ? Boolean(tamizaje.tamDifauditiva)
              : undefined,
          tamLevanteanda:
            tamizaje.tamLevanteanda !== undefined
              ? Boolean(tamizaje.tamLevanteanda)
              : undefined,
          tamPerdidaorina:
            tamizaje.tamPerdidaorina !== undefined
              ? Boolean(tamizaje.tamPerdidaorina)
              : undefined,
          tamPerdidapeso:
            tamizaje.tamPerdidapeso !== undefined
              ? Boolean(tamizaje.tamPerdidapeso)
              : undefined,
          tamPerdidamemoria:
            tamizaje.tamPerdidamemoria !== undefined
              ? Boolean(tamizaje.tamPerdidamemoria)
              : undefined,
          tamTristedeprimido:
            tamizaje.tamTristedeprimido !== undefined
              ? Boolean(tamizaje.tamTristedeprimido)
              : undefined,
          tamBanarsolo:
            tamizaje.tamBanarsolo !== undefined
              ? Boolean(tamizaje.tamBanarsolo)
              : undefined,
          tamComprasolo:
            tamizaje.tamComprasolo !== undefined
              ? Boolean(tamizaje.tamComprasolo)
              : undefined,
          tamVivesolo:
            tamizaje.tamVivesolo !== undefined
              ? Boolean(tamizaje.tamVivesolo)
              : undefined,
          tamTotal: tamizaje.tamTotal,
        });
      } else {
        await this.tamizajeService.create({
          idenfermeria,
          tamDifvisual:
            tamizaje.tamDifvisual !== undefined
              ? Boolean(tamizaje.tamDifvisual)
              : undefined,
          tamDifauditiva:
            tamizaje.tamDifauditiva !== undefined
              ? Boolean(tamizaje.tamDifauditiva)
              : undefined,
          tamLevanteanda:
            tamizaje.tamLevanteanda !== undefined
              ? Boolean(tamizaje.tamLevanteanda)
              : undefined,
          tamPerdidaorina:
            tamizaje.tamPerdidaorina !== undefined
              ? Boolean(tamizaje.tamPerdidaorina)
              : undefined,
          tamPerdidapeso:
            tamizaje.tamPerdidapeso !== undefined
              ? Boolean(tamizaje.tamPerdidapeso)
              : undefined,
          tamPerdidamemoria:
            tamizaje.tamPerdidamemoria !== undefined
              ? Boolean(tamizaje.tamPerdidamemoria)
              : undefined,
          tamTristedeprimido:
            tamizaje.tamTristedeprimido !== undefined
              ? Boolean(tamizaje.tamTristedeprimido)
              : undefined,
          tamBanarsolo:
            tamizaje.tamBanarsolo !== undefined
              ? Boolean(tamizaje.tamBanarsolo)
              : undefined,
          tamComprasolo:
            tamizaje.tamComprasolo !== undefined
              ? Boolean(tamizaje.tamComprasolo)
              : undefined,
          tamVivesolo:
            tamizaje.tamVivesolo !== undefined
              ? Boolean(tamizaje.tamVivesolo)
              : undefined,
          tamTotal: tamizaje.tamTotal,
        });
      }
    }

    return this.findOneFull(idenfermeria);
  }

  async obtenerEnfermeriaCompleta(idEnfermeria: number): Promise<any> {
    const result: unknown[] = await this.enfermeriaRepository.query(
      'CALL sp_obtenerEnfermeriaCompleta(?)',
      [idEnfermeria],
    );

    const rows = Array.isArray(result[0]) ? result[0] : result;

    if (!rows || rows.length === 0) {
      throw new NotFoundException(
        `No se encontró enfermería con ID ${idEnfermeria}.`,
      );
    }

    return rows[0];
  }
}
