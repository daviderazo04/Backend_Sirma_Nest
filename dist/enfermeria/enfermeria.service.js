"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnfermeriaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const enfermeria_entity_1 = require("./entities/enfermeria.entity");
const paciente_service_1 = require("../paciente/paciente.service");
const act_basicas_service_1 = require("../act-basicas/act-basicas.service");
const act_instrumental_service_1 = require("../act-instrumental/act-instrumental.service");
const cognitivo_service_1 = require("../cognitivo/cognitivo.service");
const depresion_service_1 = require("../depresion/depresion.service");
const otros_riesgos_service_1 = require("../otros-riesgos/otros-riesgos.service");
const recurso_social_service_1 = require("../recurso-social/recurso-social.service");
const tamizaje_service_1 = require("../tamizaje/tamizaje.service");
let EnfermeriaService = class EnfermeriaService {
    enfermeriaRepository;
    pacienteService;
    actBasicasService;
    actInstrumentalService;
    cognitivoService;
    depresionService;
    otrosRiesgosService;
    recursoSocialService;
    tamizajeService;
    constructor(enfermeriaRepository, pacienteService, actBasicasService, actInstrumentalService, cognitivoService, depresionService, otrosRiesgosService, recursoSocialService, tamizajeService) {
        this.enfermeriaRepository = enfermeriaRepository;
        this.pacienteService = pacienteService;
        this.actBasicasService = actBasicasService;
        this.actInstrumentalService = actInstrumentalService;
        this.cognitivoService = cognitivoService;
        this.depresionService = depresionService;
        this.otrosRiesgosService = otrosRiesgosService;
        this.recursoSocialService = recursoSocialService;
        this.tamizajeService = tamizajeService;
    }
    async create(createEnfermeriaDto) {
        if (!createEnfermeriaDto.idficha) {
            throw new common_1.NotFoundException('ID de Ficha (Paciente) es requerido para crear un registro de Enfermería.');
        }
        const paciente = await this.pacienteService.findOne(createEnfermeriaDto.idficha);
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente con ID de Ficha ${createEnfermeriaDto.idficha} no encontrado.`);
        }
        const enfermeria = this.enfermeriaRepository.create({
            ...createEnfermeriaDto,
            idficha2: paciente,
        });
        return await this.enfermeriaRepository.save(enfermeria);
    }
    async createFull(createFullEnfermeriaDto) {
        const { idficha, ...enfermeriaFields } = createFullEnfermeriaDto;
        const { actbasica, actinstrumental, cognitivo, depresion, otrosriesgos, recursosocial, tamizaje, } = enfermeriaFields;
        const paciente = await this.pacienteService.findOne(idficha);
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente con ID ${idficha} no encontrado.`);
        }
        const enfermeriaToSave = this.enfermeriaRepository.create({
            idficha,
            enfNombreencuestador: enfermeriaFields.enfNombreencuestador,
            enfObservaciones: enfermeriaFields.enfObservaciones,
            idficha2: paciente,
        });
        const savedEnfermeria = await this.enfermeriaRepository.save(enfermeriaToSave);
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
            const depresionDto = {
                idenfermeria,
                depSatisfechovida: depresion.depSatisfechovida !== undefined
                    ? Boolean(depresion.depSatisfechovida)
                    : undefined,
                depDejaactinteres: depresion.depDejaactinteres !== undefined
                    ? Boolean(depresion.depDejaactinteres)
                    : undefined,
                depVidavacia: depresion.depVidavacia !== undefined
                    ? Boolean(depresion.depVidavacia)
                    : undefined,
                depAburrefrecuencia: depresion.depAburrefrecuencia !== undefined
                    ? Boolean(depresion.depAburrefrecuencia)
                    : undefined,
                depBuenanimo: depresion.depBuenanimo !== undefined
                    ? Boolean(depresion.depBuenanimo)
                    : undefined,
                depAlgomalosuceder: depresion.depAlgomalosuceder !== undefined
                    ? Boolean(depresion.depAlgomalosuceder)
                    : undefined,
                depFelizmayortiempo: depresion.depFelizmayortiempo !== undefined
                    ? Boolean(depresion.depFelizmayortiempo)
                    : undefined,
                depDesamparado: depresion.depDesamparado !== undefined
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
                tamDifvisual: tamizaje.tamDifvisual !== undefined
                    ? Boolean(tamizaje.tamDifvisual)
                    : undefined,
                tamDifauditiva: tamizaje.tamDifauditiva !== undefined
                    ? Boolean(tamizaje.tamDifauditiva)
                    : undefined,
                tamLevanteanda: tamizaje.tamLevanteanda !== undefined
                    ? Boolean(tamizaje.tamLevanteanda)
                    : undefined,
                tamPerdidaorina: tamizaje.tamPerdidaorina !== undefined
                    ? Boolean(tamizaje.tamPerdidaorina)
                    : undefined,
                tamPerdidapeso: tamizaje.tamPerdidapeso !== undefined
                    ? Boolean(tamizaje.tamPerdidapeso)
                    : undefined,
                tamPerdidamemoria: tamizaje.tamPerdidamemoria !== undefined
                    ? Boolean(tamizaje.tamPerdidamemoria)
                    : undefined,
                tamTristedeprimido: tamizaje.tamTristedeprimido !== undefined
                    ? Boolean(tamizaje.tamTristedeprimido)
                    : undefined,
                tamBanarsolo: tamizaje.tamBanarsolo !== undefined
                    ? Boolean(tamizaje.tamBanarsolo)
                    : undefined,
                tamComprasolo: tamizaje.tamComprasolo !== undefined
                    ? Boolean(tamizaje.tamComprasolo)
                    : undefined,
                tamVivesolo: tamizaje.tamVivesolo !== undefined
                    ? Boolean(tamizaje.tamVivesolo)
                    : undefined,
                tamTotal: tamizaje.tamTotal,
            });
        }
        return this.findOneFull(idenfermeria);
    }
    async findOne(id) {
        const enfermeria = await this.enfermeriaRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!enfermeria) {
            throw new common_1.NotFoundException('Medicina not found');
        }
        return enfermeria;
    }
    async findOneFull(id) {
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
            throw new common_1.NotFoundException(`Registro de Enfermería con ID ${id} no encontrado.`);
        }
        return enfermeria;
    }
    async findAll() {
        return await this.enfermeriaRepository.find();
    }
    async findAllFull() {
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
    async remove(id) {
        const enfermeria = await this.enfermeriaRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!enfermeria) {
            throw new common_1.NotFoundException('Medicina not found');
        }
        return await this.enfermeriaRepository.remove(enfermeria);
    }
    async update(id, UpdateEnfermeriaDto) {
        const enfermeria = await this.enfermeriaRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!enfermeria) {
            throw new common_1.NotFoundException('Medicina not found');
        }
        Object.assign(enfermeria, UpdateEnfermeriaDto);
        return await this.enfermeriaRepository.save(enfermeria);
    }
    async updateFull(id, updateFullEnfermeriaDto) {
        const { idficha, ...enfermeriaFields } = updateFullEnfermeriaDto;
        const { actbasica, actinstrumental, cognitivo, depresion, otrosriesgos, recursosocial, tamizaje, } = enfermeriaFields;
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
            throw new common_1.NotFoundException(`Enfermería con ID ${id} no encontrada.`);
        }
        if (idficha && Number(existingEnfermeria.idficha) !== Number(idficha)) {
            const newPaciente = await this.pacienteService.findOne(String(idficha));
            if (!newPaciente) {
                throw new common_1.NotFoundException(`Nuevo Paciente con ID ${idficha} no encontrado para la actualización.`);
            }
            existingEnfermeria.idficha = String(idficha);
            existingEnfermeria.idficha2 = newPaciente;
        }
        Object.assign(existingEnfermeria, {
            enfNombreencuestador: enfermeriaFields.enfNombreencuestador ??
                existingEnfermeria.enfNombreencuestador,
            enfObservaciones: enfermeriaFields.enfObservaciones ??
                existingEnfermeria.enfObservaciones,
        });
        const updatedEnfermeria = await this.enfermeriaRepository.save(existingEnfermeria);
        const idenfermeria = updatedEnfermeria.idenfermeria;
        if (actbasica) {
            if (existingEnfermeria.actbasica) {
                await this.actBasicasService.update(idenfermeria, actbasica);
            }
            else {
                await this.actBasicasService.create({
                    idenfermeria,
                    ...actbasica,
                });
            }
        }
        if (actinstrumental) {
            if (existingEnfermeria.actinstrumental) {
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
            }
            else {
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
            }
            else {
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
                const depresionDto = {
                    depSatisfechovida: depresion.depSatisfechovida !== undefined
                        ? Boolean(depresion.depSatisfechovida)
                        : undefined,
                    depDejaactinteres: depresion.depDejaactinteres !== undefined
                        ? Boolean(depresion.depDejaactinteres)
                        : undefined,
                    depVidavacia: depresion.depVidavacia !== undefined
                        ? Boolean(depresion.depVidavacia)
                        : undefined,
                    depAburrefrecuencia: depresion.depAburrefrecuencia !== undefined
                        ? Boolean(depresion.depAburrefrecuencia)
                        : undefined,
                    depBuenanimo: depresion.depBuenanimo !== undefined
                        ? Boolean(depresion.depBuenanimo)
                        : undefined,
                    depAlgomalosuceder: depresion.depAlgomalosuceder !== undefined
                        ? Boolean(depresion.depAlgomalosuceder)
                        : undefined,
                    depFelizmayortiempo: depresion.depFelizmayortiempo !== undefined
                        ? Boolean(depresion.depFelizmayortiempo)
                        : undefined,
                    depDesamparado: depresion.depDesamparado !== undefined
                        ? Boolean(depresion.depDesamparado)
                        : undefined,
                    depTotal: depresion.depTotal,
                };
                await this.depresionService.update(idenfermeria, depresionDto);
            }
            else {
                const depresionDto = {
                    idenfermeria,
                    depSatisfechovida: depresion.depSatisfechovida !== undefined
                        ? Boolean(depresion.depSatisfechovida)
                        : undefined,
                    depDejaactinteres: depresion.depDejaactinteres !== undefined
                        ? Boolean(depresion.depDejaactinteres)
                        : undefined,
                    depVidavacia: depresion.depVidavacia !== undefined
                        ? Boolean(depresion.depVidavacia)
                        : undefined,
                    depAburrefrecuencia: depresion.depAburrefrecuencia !== undefined
                        ? Boolean(depresion.depAburrefrecuencia)
                        : undefined,
                    depBuenanimo: depresion.depBuenanimo !== undefined
                        ? Boolean(depresion.depBuenanimo)
                        : undefined,
                    depAlgomalosuceder: depresion.depAlgomalosuceder !== undefined
                        ? Boolean(depresion.depAlgomalosuceder)
                        : undefined,
                    depFelizmayortiempo: depresion.depFelizmayortiempo !== undefined
                        ? Boolean(depresion.depFelizmayortiempo)
                        : undefined,
                    depDesamparado: depresion.depDesamparado !== undefined
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
            }
            else {
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
            }
            else {
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
                    tamDifvisual: tamizaje.tamDifvisual !== undefined
                        ? Boolean(tamizaje.tamDifvisual)
                        : undefined,
                    tamDifauditiva: tamizaje.tamDifauditiva !== undefined
                        ? Boolean(tamizaje.tamDifauditiva)
                        : undefined,
                    tamLevanteanda: tamizaje.tamLevanteanda !== undefined
                        ? Boolean(tamizaje.tamLevanteanda)
                        : undefined,
                    tamPerdidaorina: tamizaje.tamPerdidaorina !== undefined
                        ? Boolean(tamizaje.tamPerdidaorina)
                        : undefined,
                    tamPerdidapeso: tamizaje.tamPerdidapeso !== undefined
                        ? Boolean(tamizaje.tamPerdidapeso)
                        : undefined,
                    tamPerdidamemoria: tamizaje.tamPerdidamemoria !== undefined
                        ? Boolean(tamizaje.tamPerdidamemoria)
                        : undefined,
                    tamTristedeprimido: tamizaje.tamTristedeprimido !== undefined
                        ? Boolean(tamizaje.tamTristedeprimido)
                        : undefined,
                    tamBanarsolo: tamizaje.tamBanarsolo !== undefined
                        ? Boolean(tamizaje.tamBanarsolo)
                        : undefined,
                    tamComprasolo: tamizaje.tamComprasolo !== undefined
                        ? Boolean(tamizaje.tamComprasolo)
                        : undefined,
                    tamVivesolo: tamizaje.tamVivesolo !== undefined
                        ? Boolean(tamizaje.tamVivesolo)
                        : undefined,
                    tamTotal: tamizaje.tamTotal,
                });
            }
            else {
                await this.tamizajeService.create({
                    idenfermeria,
                    tamDifvisual: tamizaje.tamDifvisual !== undefined
                        ? Boolean(tamizaje.tamDifvisual)
                        : undefined,
                    tamDifauditiva: tamizaje.tamDifauditiva !== undefined
                        ? Boolean(tamizaje.tamDifauditiva)
                        : undefined,
                    tamLevanteanda: tamizaje.tamLevanteanda !== undefined
                        ? Boolean(tamizaje.tamLevanteanda)
                        : undefined,
                    tamPerdidaorina: tamizaje.tamPerdidaorina !== undefined
                        ? Boolean(tamizaje.tamPerdidaorina)
                        : undefined,
                    tamPerdidapeso: tamizaje.tamPerdidapeso !== undefined
                        ? Boolean(tamizaje.tamPerdidapeso)
                        : undefined,
                    tamPerdidamemoria: tamizaje.tamPerdidamemoria !== undefined
                        ? Boolean(tamizaje.tamPerdidamemoria)
                        : undefined,
                    tamTristedeprimido: tamizaje.tamTristedeprimido !== undefined
                        ? Boolean(tamizaje.tamTristedeprimido)
                        : undefined,
                    tamBanarsolo: tamizaje.tamBanarsolo !== undefined
                        ? Boolean(tamizaje.tamBanarsolo)
                        : undefined,
                    tamComprasolo: tamizaje.tamComprasolo !== undefined
                        ? Boolean(tamizaje.tamComprasolo)
                        : undefined,
                    tamVivesolo: tamizaje.tamVivesolo !== undefined
                        ? Boolean(tamizaje.tamVivesolo)
                        : undefined,
                    tamTotal: tamizaje.tamTotal,
                });
            }
        }
        return this.findOneFull(idenfermeria);
    }
    async obtenerEnfermeriaCompleta(idEnfermeria) {
        const result = await this.enfermeriaRepository.query('CALL sp_obtenerEnfermeriaCompleta(?)', [idEnfermeria]);
        const rows = Array.isArray(result[0]) ? result[0] : result;
        if (!rows || rows.length === 0) {
            throw new common_1.NotFoundException(`No se encontró enfermería con ID ${idEnfermeria}.`);
        }
        return rows[0];
    }
};
exports.EnfermeriaService = EnfermeriaService;
exports.EnfermeriaService = EnfermeriaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(enfermeria_entity_1.Enfermeria)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => act_basicas_service_1.ActBasicasService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => act_instrumental_service_1.ActInstrumentalService))),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => cognitivo_service_1.CognitivoService))),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => depresion_service_1.DepresionService))),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => otros_riesgos_service_1.OtrosRiesgosService))),
    __param(7, (0, common_1.Inject)((0, common_1.forwardRef)(() => recurso_social_service_1.RecursoSocialService))),
    __param(8, (0, common_1.Inject)((0, common_1.forwardRef)(() => tamizaje_service_1.TamizajeService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        paciente_service_1.PacienteService,
        act_basicas_service_1.ActBasicasService,
        act_instrumental_service_1.ActInstrumentalService,
        cognitivo_service_1.CognitivoService,
        depresion_service_1.DepresionService,
        otros_riesgos_service_1.OtrosRiesgosService,
        recurso_social_service_1.RecursoSocialService,
        tamizaje_service_1.TamizajeService])
], EnfermeriaService);
//# sourceMappingURL=enfermeria.service.js.map