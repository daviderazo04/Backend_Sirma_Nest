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
exports.MedicinaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medicina_entity_1 = require("./entities/medicina.entity");
const typeorm_2 = require("typeorm");
const paciente_service_1 = require("../paciente/paciente.service");
const alerta_service_1 = require("../alerta/alerta.service");
const andrologico_service_1 = require("../andrologico/andrologico.service");
const antecedentes_familiares_service_1 = require("../antecedentes-familiares/antecedentes-familiares.service");
const diagnostico_service_1 = require("../diagnostico/diagnostico.service");
const examen_regional_service_1 = require("../examen-regional/examen-regional.service");
const examen_sistemico_service_1 = require("../examen-sistemico/examen-sistemico.service");
const farmacologico_service_1 = require("../farmacologico/farmacologico.service");
const general_service_1 = require("../general/general.service");
const ginecologico_service_1 = require("../ginecologico/ginecologico.service");
const habitos_service_1 = require("../habitos/habitos.service");
const patologico_service_1 = require("../patologico/patologico.service");
const revision_actual_service_1 = require("../revision-actual/revision-actual.service");
const sindromes_geriatricos_service_1 = require("../sindromes-geriatricos/sindromes-geriatricos.service");
let MedicinaService = class MedicinaService {
    medicinaRepository;
    pacienteService;
    alertaService;
    andrologicoService;
    antecedentesfamiliaresService;
    diagnosticoService;
    examenRegionalService;
    examenSistemicoService;
    farmacologicoService;
    generalService;
    ginecologicoService;
    habitosService;
    patologicoService;
    revisionActualService;
    sindromesGeriatricosService;
    constructor(medicinaRepository, pacienteService, alertaService, andrologicoService, antecedentesfamiliaresService, diagnosticoService, examenRegionalService, examenSistemicoService, farmacologicoService, generalService, ginecologicoService, habitosService, patologicoService, revisionActualService, sindromesGeriatricosService) {
        this.medicinaRepository = medicinaRepository;
        this.pacienteService = pacienteService;
        this.alertaService = alertaService;
        this.andrologicoService = andrologicoService;
        this.antecedentesfamiliaresService = antecedentesfamiliaresService;
        this.diagnosticoService = diagnosticoService;
        this.examenRegionalService = examenRegionalService;
        this.examenSistemicoService = examenSistemicoService;
        this.farmacologicoService = farmacologicoService;
        this.generalService = generalService;
        this.ginecologicoService = ginecologicoService;
        this.habitosService = habitosService;
        this.patologicoService = patologicoService;
        this.revisionActualService = revisionActualService;
        this.sindromesGeriatricosService = sindromesGeriatricosService;
    }
    async create(createMedicinaDto) {
        if (!createMedicinaDto.idficha) {
            throw new common_1.NotFoundException('idFicha is required');
        }
        const paciente = await this.pacienteService.findOne(createMedicinaDto.idficha);
        if (!paciente) {
            throw new common_1.NotFoundException('Paciente not found');
        }
        const medicina = this.medicinaRepository.create({
            ...createMedicinaDto,
            idficha2: paciente,
        });
        return await this.medicinaRepository.save(medicina);
    }
    async createFull(createFullMedicinaDto) {
        const { idficha, ...medicinaFields } = createFullMedicinaDto;
        const { alerta, andrologico, antecedentesfamiliares, diagnostico, examenregional, examensistemico, farmacologico, general, ginecologico, habitosnocivos, patologico, revisionactual, sindromesgeriatricos, } = medicinaFields;
        const paciente = await this.pacienteService.findOne(idficha);
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente with ID ${idficha} not found.`);
        }
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
        const medicinaId = newMedicina.idmedicina;
        if (alerta) {
            await this.alertaService.create({ idmedicina: medicinaId, ...alerta });
        }
        if (andrologico) {
            await this.andrologicoService.create({
                idmedicina: medicinaId,
                ...andrologico,
            });
        }
        if (antecedentesfamiliares) {
            await this.antecedentesfamiliaresService.create({
                idmedicina: medicinaId,
                ...antecedentesfamiliares,
            });
        }
        if (diagnostico) {
            await this.diagnosticoService.create({
                idmedicina: medicinaId,
                ...diagnostico,
            });
        }
        if (examenregional) {
            await this.examenRegionalService.create({
                idmedicina: medicinaId,
                ...examenregional,
            });
        }
        if (examensistemico) {
            await this.examenSistemicoService.create({
                idmedicina: medicinaId,
                ...examensistemico,
            });
        }
        if (farmacologico) {
            await this.farmacologicoService.create({
                idmedicina: medicinaId,
                ...farmacologico,
            });
        }
        if (general) {
            await this.generalService.create({ idmedicina: medicinaId, ...general });
        }
        if (ginecologico) {
            await this.ginecologicoService.create({
                idmedicina: medicinaId,
                ...ginecologico,
            });
        }
        if (habitosnocivos) {
            await this.habitosService.create({
                idmedicina: medicinaId,
                ...habitosnocivos,
            });
        }
        if (patologico) {
            await this.patologicoService.create({
                idmedicina: medicinaId,
                ...patologico,
            });
        }
        if (revisionactual) {
            await this.revisionActualService.create({
                idmedicina: medicinaId,
                ...revisionactual,
            });
        }
        if (sindromesgeriatricos) {
            await this.sindromesGeriatricosService.create({
                idmedicina: medicinaId,
                ...sindromesgeriatricos,
            });
        }
        return this.findOne(medicinaId);
    }
    async findOneFull(id) {
        const medicina = await this.medicinaRepository.findOne({
            where: { idmedicina: id },
            relations: [
                'alerta',
                'andrologico',
                'antecedentesfamiliares',
                'diagnostico',
                'examenregional',
                'examensistemico',
                'farmacologico',
                'general',
                'ginecologico',
                'habitosnocivos',
                'patologico',
                'revisionactual',
                'sindromesgeriatricos',
                'idficha2',
            ],
        });
        if (!medicina) {
            throw new common_1.NotFoundException('Medicina not found');
        }
        return medicina;
    }
    async findAllFull() {
        return await this.medicinaRepository.find({
            relations: [
                'alerta',
                'andrologico',
                'antecedentesfamiliares',
                'diagnostico',
                'examenregional',
                'examensistemico',
                'farmacologico',
                'general',
                'ginecologico',
                'habitosnocivos',
                'patologico',
                'revisionactual',
                'sindromesgeriatricos',
                'idficha2',
            ],
        });
    }
    async findAll() {
        return await this.medicinaRepository.find();
    }
    async findOne(id) {
        const medicina = await this.medicinaRepository.findOne({
            where: { idmedicina: id },
        });
        if (!medicina) {
            throw new common_1.NotFoundException('Medicina not found');
        }
        return medicina;
    }
    async update(id, updateMedicinaDto) {
        const medicina = await this.medicinaRepository.findOne({
            where: { idmedicina: id },
        });
        if (!medicina) {
            throw new common_1.NotFoundException('Medicina not found');
        }
        Object.assign(medicina, updateMedicinaDto);
        return await this.medicinaRepository.save(medicina);
    }
    async updateFull(id, updateFullMedicinaDto) {
        const { idficha, ...medicinaFields } = updateFullMedicinaDto;
        const { alerta, andrologico, antecedentesfamiliares, diagnostico, examenregional, examensistemico, farmacologico, general, ginecologico, habitosnocivos, patologico, revisionactual, sindromesgeriatricos, } = medicinaFields;
        const existingMedicina = await this.medicinaRepository.findOne({
            where: { idmedicina: id },
            relations: [
                'alerta',
                'andrologico',
                'antecedentesfamiliares',
                'diagnostico',
                'examenregional',
                'examensistemico',
                'farmacologico',
                'general',
                'ginecologico',
                'habitosnocivos',
                'patologico',
                'revisionactual',
                'sindromesgeriatricos',
                'idficha2',
            ],
        });
        if (!existingMedicina) {
            throw new common_1.NotFoundException(`Medicina con ID ${id} no encontrada.`);
        }
        if (idficha && existingMedicina.idficha !== idficha) {
            const newPaciente = await this.pacienteService.findOne(idficha);
            if (!newPaciente) {
                throw new common_1.NotFoundException(`Nuevo Paciente con ID ${idficha} no encontrado para la actualización.`);
            }
            existingMedicina.idficha = idficha;
            existingMedicina.idficha2 = newPaciente;
        }
        Object.assign(existingMedicina, {
            medNombreencuestador: medicinaFields.medNombreencuestador ??
                existingMedicina.medNombreencuestador,
            medAnamnesis: medicinaFields.medAnamnesis ?? existingMedicina.medAnamnesis,
            medObservacionesrevact: medicinaFields.medObservacionesrevact ??
                existingMedicina.medObservacionesrevact,
            medObservacionexamenes: medicinaFields.medObservacionexamenes ??
                existingMedicina.medObservacionexamenes,
            medPlanintegral: medicinaFields.medPlanintegral ?? existingMedicina.medPlanintegral,
        });
        const updatedMedicina = await this.medicinaRepository.save(existingMedicina);
        const medicinaId = updatedMedicina.idmedicina;
        try {
            if (alerta) {
                if (existingMedicina.alerta) {
                    await this.alertaService.update(medicinaId, alerta);
                }
                else {
                    await this.alertaService.create({
                        idmedicina: medicinaId,
                        ...alerta,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create Alerta for Medicina ${medicinaId}:`, error);
        }
        try {
            if (andrologico) {
                if (existingMedicina.andrologico) {
                    await this.andrologicoService.update(medicinaId, andrologico);
                }
                else {
                    await this.andrologicoService.create({
                        idmedicina: medicinaId,
                        ...andrologico,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create andrologico for Medicina ${medicinaId}:`, error);
        }
        try {
            if (antecedentesfamiliares) {
                if (existingMedicina.antecedentesfamiliares) {
                    await this.antecedentesfamiliaresService.update(medicinaId, antecedentesfamiliares);
                }
                else {
                    await this.antecedentesfamiliaresService.create({
                        idmedicina: medicinaId,
                        ...antecedentesfamiliares,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create antecedentesfamiliares for Medicina ${medicinaId}:`, error);
        }
        try {
            if (diagnostico) {
                if (existingMedicina.diagnostico) {
                    await this.diagnosticoService.update(medicinaId, diagnostico);
                }
                else {
                    await this.diagnosticoService.create({
                        idmedicina: medicinaId,
                        ...diagnostico,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create diagnostico for Medicina ${medicinaId}:`, error);
        }
        try {
            if (diagnostico) {
                if (existingMedicina.diagnostico) {
                    await this.diagnosticoService.update(medicinaId, diagnostico);
                }
                else {
                    await this.diagnosticoService.create({
                        idmedicina: medicinaId,
                        ...diagnostico,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create diagnostico for Medicina ${medicinaId}:`, error);
        }
        try {
            if (examenregional) {
                if (existingMedicina.examenregional) {
                    await this.examenRegionalService.update(medicinaId, examenregional);
                }
                else {
                    await this.examenRegionalService.create({
                        idmedicina: medicinaId,
                        ...examenregional,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create examenregional for Medicina ${medicinaId}:`, error);
        }
        try {
            if (examensistemico) {
                if (existingMedicina.examensistemico) {
                    await this.examenSistemicoService.update(medicinaId, examensistemico);
                }
                else {
                    await this.examenSistemicoService.create({
                        idmedicina: medicinaId,
                        ...examensistemico,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create examensistemico for Medicina ${medicinaId}:`, error);
        }
        try {
            if (farmacologico) {
                if (existingMedicina.farmacologico) {
                    await this.farmacologicoService.update(medicinaId, farmacologico);
                }
                else {
                    await this.farmacologicoService.create({
                        idmedicina: medicinaId,
                        ...farmacologico,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create farmacologico for Medicina ${medicinaId}:`, error);
        }
        try {
            if (general) {
                if (existingMedicina.general) {
                    await this.generalService.update(medicinaId, general);
                }
                else {
                    await this.generalService.create({
                        idmedicina: medicinaId,
                        ...general,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create general for Medicina ${medicinaId}:`, error);
        }
        try {
            if (ginecologico) {
                if (existingMedicina.ginecologico) {
                    await this.ginecologicoService.update(medicinaId, ginecologico);
                }
                else {
                    await this.ginecologicoService.create({
                        idmedicina: medicinaId,
                        ...ginecologico,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create ginecologico for Medicina ${medicinaId}:`, error);
        }
        try {
            if (habitosnocivos) {
                if (existingMedicina.habitosnocivos) {
                    await this.habitosService.update(medicinaId, habitosnocivos);
                }
                else {
                    await this.habitosService.create({
                        idmedicina: medicinaId,
                        ...habitosnocivos,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create habitosnocivos for Medicina ${medicinaId}:`, error);
        }
        try {
            if (patologico) {
                if (existingMedicina.patologico) {
                    await this.patologicoService.update(medicinaId, patologico);
                }
                else {
                    await this.patologicoService.create({
                        idmedicina: medicinaId,
                        ...patologico,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create patologico for Medicina ${medicinaId}:`, error);
        }
        try {
            if (revisionactual) {
                if (existingMedicina.revisionactual) {
                    await this.revisionActualService.update(medicinaId, revisionactual);
                }
                else {
                    await this.revisionActualService.create({
                        idmedicina: medicinaId,
                        ...revisionactual,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create revisionactual for Medicina ${medicinaId}:`, error);
        }
        try {
            if (sindromesgeriatricos) {
                if (existingMedicina.sindromesgeriatricos) {
                    await this.sindromesGeriatricosService.update(medicinaId, sindromesgeriatricos);
                }
                else {
                    await this.sindromesGeriatricosService.create({
                        idmedicina: medicinaId,
                        ...sindromesgeriatricos,
                    });
                }
            }
        }
        catch (error) {
            console.error(`Failed to update/create sindromesgeriatricos for Medicina ${medicinaId}:`, error);
        }
        return this.findOneFull(medicinaId);
    }
    async remove(id) {
        const medicina = await this.medicinaRepository.findOne({
            where: { idmedicina: id },
        });
        if (!medicina) {
            throw new common_1.NotFoundException('Medicina not found');
        }
        return await this.medicinaRepository.remove(medicina);
    }
};
exports.MedicinaService = MedicinaService;
exports.MedicinaService = MedicinaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medicina_entity_1.Medicina)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => alerta_service_1.AlertaService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => andrologico_service_1.AndrologicoService))),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => antecedentes_familiares_service_1.AntecedentesfamiliaresService))),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => diagnostico_service_1.DiagnosticoService))),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => examen_regional_service_1.ExamenRegionalService))),
    __param(7, (0, common_1.Inject)((0, common_1.forwardRef)(() => examen_sistemico_service_1.ExamenSistemicoService))),
    __param(8, (0, common_1.Inject)((0, common_1.forwardRef)(() => farmacologico_service_1.FarmacologicoService))),
    __param(9, (0, common_1.Inject)((0, common_1.forwardRef)(() => general_service_1.GeneralService))),
    __param(10, (0, common_1.Inject)((0, common_1.forwardRef)(() => ginecologico_service_1.GinecologicoService))),
    __param(11, (0, common_1.Inject)((0, common_1.forwardRef)(() => habitos_service_1.HabitoService))),
    __param(12, (0, common_1.Inject)((0, common_1.forwardRef)(() => patologico_service_1.PatologicoService))),
    __param(13, (0, common_1.Inject)((0, common_1.forwardRef)(() => revision_actual_service_1.RevisionActualService))),
    __param(14, (0, common_1.Inject)((0, common_1.forwardRef)(() => sindromes_geriatricos_service_1.SindromesGeriatricosService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        paciente_service_1.PacienteService,
        alerta_service_1.AlertaService,
        andrologico_service_1.AndrologicoService,
        antecedentes_familiares_service_1.AntecedentesfamiliaresService,
        diagnostico_service_1.DiagnosticoService,
        examen_regional_service_1.ExamenRegionalService,
        examen_sistemico_service_1.ExamenSistemicoService,
        farmacologico_service_1.FarmacologicoService,
        general_service_1.GeneralService,
        ginecologico_service_1.GinecologicoService,
        habitos_service_1.HabitoService,
        patologico_service_1.PatologicoService,
        revision_actual_service_1.RevisionActualService,
        sindromes_geriatricos_service_1.SindromesGeriatricosService])
], MedicinaService);
//# sourceMappingURL=medicina.service.js.map