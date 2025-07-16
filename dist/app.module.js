"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const persona_entity_1 = require("./persona/entities/persona.entity");
const paciente_entity_1 = require("./paciente/entities/paciente.entity");
const persona_ficha_entity_1 = require("./persona-ficha/entities/persona-ficha.entity");
const datos_generale_entity_1 = require("./datos-generales/entities/datos-generale.entity");
const act_basica_entity_1 = require("./act-basicas/entities/act-basica.entity");
const act_instrumental_entity_1 = require("./act-instrumental/entities/act-instrumental.entity");
const alerta_entity_1 = require("./alerta/entities/alerta.entity");
const andrologico_entity_1 = require("./andrologico/entities/andrologico.entity");
const antecedentes_familiare_entity_1 = require("./antecedentes-familiares/entities/antecedentes-familiare.entity");
const antecedentes_nutri_entity_1 = require("./antecedentes-nutri/entities/antecedentes-nutri.entity");
const cognitivo_entity_1 = require("./cognitivo/entities/cognitivo.entity");
const cribaje_entity_1 = require("./cribaje/entities/cribaje.entity");
const datos_antropometrico_entity_1 = require("./datos-antropometricos/entities/datos-antropometrico.entity");
const depresion_entity_1 = require("./depresion/entities/depresion.entity");
const diagnostico_entity_1 = require("./diagnostico/entities/diagnostico.entity");
const dolor_fisio_entity_1 = require("./dolor-fisio/entities/dolor-fisio.entity");
const enfermeria_entity_1 = require("./enfermeria/entities/enfermeria.entity");
const ginecologico_entity_1 = require("./ginecologico/entities/ginecologico.entity");
const habito_entity_1 = require("./habitos/entities/habito.entity");
const medicina_entity_1 = require("./medicina/entities/medicina.entity");
const nutricion_entity_1 = require("./nutricion/entities/nutricion.entity");
const recurso_social_entity_1 = require("./recurso-social/entities/recurso-social.entity");
const revision_actual_entity_1 = require("./revision-actual/entities/revision-actual.entity");
const seguimiento_fisioterapia_entity_1 = require("./seguimiento-fisioterapia/entities/seguimiento-fisioterapia.entity");
const seguimiento_salud_entity_1 = require("./seguimiento-salud/entities/seguimiento-salud.entity");
const sindromes_geriatrico_entity_1 = require("./sindromes-geriatricos/entities/sindromes-geriatrico.entity");
const tamizaje_entity_1 = require("./tamizaje/entities/tamizaje.entity");
const equilibrio_dinamico_entity_1 = require("./equilibrio-dinamico/entities/equilibrio-dinamico.entity");
const equilibrio_estatico_entity_1 = require("./equilibrio-estatico/entities/equilibrio-estatico.entity");
const evaluacion_entity_1 = require("./evaluacion/entities/evaluacion.entity");
const examen_regional_entity_1 = require("./examen-regional/entities/examen-regional.entity");
const examen_sistemico_entity_1 = require("./examen-sistemico/entities/examen-sistemico.entity");
const farmacologico_entity_1 = require("./farmacologico/entities/farmacologico.entity");
const fisioterapia_entity_1 = require("./fisioterapia/entities/fisioterapia.entity");
const fuerza_entity_1 = require("./fuerza/entities/fuerza.entity");
const general_entity_1 = require("./general/entities/general.entity");
const otros_riesgo_entity_1 = require("./otros-riesgos/entities/otros-riesgo.entity");
const patologico_entity_1 = require("./patologico/entities/patologico.entity");
const tono_muscular_entity_1 = require("./tono-muscular/entities/tono-muscular.entity");
const usuario_entity_1 = require("./usuarios/entities/usuario.entity");
const zonadolor_entity_1 = require("./zonadolor/entities/zonadolor.entity");
const satisfaccion_inteligencia_artificial_entity_1 = require("./satisfaccion-inteligencia-artificial/entities/satisfaccion-inteligencia-artificial.entity");
const paciente_module_1 = require("./paciente/paciente.module");
const act_basicas_module_1 = require("./act-basicas/act-basicas.module");
const act_instrumental_module_1 = require("./act-instrumental/act-instrumental.module");
const alerta_module_1 = require("./alerta/alerta.module");
const andrologico_module_1 = require("./andrologico/andrologico.module");
const antecedentes_familiares_module_1 = require("./antecedentes-familiares/antecedentes-familiares.module");
const cognitivo_module_1 = require("./cognitivo/cognitivo.module");
const cribaje_module_1 = require("./cribaje/cribaje.module");
const datos_generales_module_1 = require("./datos-generales/datos-generales.module");
const depresion_module_1 = require("./depresion/depresion.module");
const diagnostico_module_1 = require("./diagnostico/diagnostico.module");
const dolor_fisio_module_1 = require("./dolor-fisio/dolor-fisio.module");
const enfermeria_module_1 = require("./enfermeria/enfermeria.module");
const ginecologico_module_1 = require("./ginecologico/ginecologico.module");
const habitos_module_1 = require("./habitos/habitos.module");
const medicina_module_1 = require("./medicina/medicina.module");
const nutricion_module_1 = require("./nutricion/nutricion.module");
const persona_ficha_module_1 = require("./persona-ficha/persona-ficha.module");
const recurso_social_module_1 = require("./recurso-social/recurso-social.module");
const revision_actual_module_1 = require("./revision-actual/revision-actual.module");
const seguimiento_fisioterapia_module_1 = require("./seguimiento-fisioterapia/seguimiento-fisioterapia.module");
const seguimiento_salud_module_1 = require("./seguimiento-salud/seguimiento-salud.module");
const sindromes_geriatricos_module_1 = require("./sindromes-geriatricos/sindromes-geriatricos.module");
const tamizaje_module_1 = require("./tamizaje/tamizaje.module");
const equilibrio_dinamico_module_1 = require("./equilibrio-dinamico/equilibrio-dinamico.module");
const equilibrio_estatico_module_1 = require("./equilibrio-estatico/equilibrio-estatico.module");
const evaluacion_module_1 = require("./evaluacion/evaluacion.module");
const examen_regional_module_1 = require("./examen-regional/examen-regional.module");
const examen_sistemico_module_1 = require("./examen-sistemico/examen-sistemico.module");
const farmacologico_module_1 = require("./farmacologico/farmacologico.module");
const fisioterapia_module_1 = require("./fisioterapia/fisioterapia.module");
const fuerza_module_1 = require("./fuerza/fuerza.module");
const general_module_1 = require("./general/general.module");
const otros_riesgos_module_1 = require("./otros-riesgos/otros-riesgos.module");
const patologico_module_1 = require("./patologico/patologico.module");
const tono_muscular_module_1 = require("./tono-muscular/tono-muscular.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const zonadolor_module_1 = require("./zonadolor/zonadolor.module");
const persona_module_1 = require("./persona/persona.module");
const fichas_general_completa_module_1 = require("./fichas-general-completa/fichas-general-completa.module");
const antecedentes_nutri_module_1 = require("./antecedentes-nutri/antecedentes-nutri.module");
const datos_antropometricos_module_1 = require("./datos-antropometricos/datos-antropometricos.module");
const nutricioncompleto_module_1 = require("./nutricioncompleto/nutricioncompleto.module");
const satisfaccion_inteligencia_artificial_module_1 = require("./satisfaccion-inteligencia-artificial/satisfaccion-inteligencia-artificial.module");
const resumen_nutricional_module_1 = require("./resumen-nutricional/resumen-nutricional.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    type: 'mysql',
                    host: config.get('DB_HOST'),
                    port: config.get('DB_PORT'),
                    username: config.get('DB_USERNAME'),
                    password: config.get('DB_PASSWORD'),
                    database: config.get('DB_NAME'),
                    entities: [
                        persona_entity_1.Persona,
                        paciente_entity_1.Paciente,
                        persona_ficha_entity_1.PersonaFicha,
                        datos_generale_entity_1.Datosgenerales,
                        act_basica_entity_1.Actbasicas,
                        act_instrumental_entity_1.Actinstrumental,
                        alerta_entity_1.Alerta,
                        andrologico_entity_1.Andrologico,
                        antecedentes_familiare_entity_1.Antecedentesfamiliares,
                        antecedentes_nutri_entity_1.Antecedentesnutri,
                        cognitivo_entity_1.Cognitivo,
                        cribaje_entity_1.Cribaje,
                        datos_antropometrico_entity_1.Datosantropometricos,
                        depresion_entity_1.Depresion,
                        diagnostico_entity_1.Diagnostico,
                        dolor_fisio_entity_1.Dolorfisio,
                        enfermeria_entity_1.Enfermeria,
                        ginecologico_entity_1.Ginecologico,
                        habito_entity_1.Habitos,
                        medicina_entity_1.Medicina,
                        nutricion_entity_1.Nutricion,
                        recurso_social_entity_1.Recursosocial,
                        revision_actual_entity_1.Revisionactual,
                        seguimiento_fisioterapia_entity_1.Seguimientofisioterapia,
                        seguimiento_salud_entity_1.Seguimientosalud,
                        sindromes_geriatrico_entity_1.Sindromesgeriatricos,
                        tamizaje_entity_1.Tamizaje,
                        equilibrio_dinamico_entity_1.Equilibriodinamico,
                        equilibrio_estatico_entity_1.Equilibrioestatico,
                        evaluacion_entity_1.Evaluacion,
                        examen_regional_entity_1.Examenregional,
                        examen_sistemico_entity_1.Examensistemico,
                        farmacologico_entity_1.Farmacologico,
                        fisioterapia_entity_1.Fisioterapia,
                        fuerza_entity_1.Fuerza,
                        general_entity_1.General,
                        otros_riesgo_entity_1.Otrosriesgos,
                        patologico_entity_1.Patologico,
                        tono_muscular_entity_1.Tonomuscular,
                        usuario_entity_1.Usuarios,
                        zonadolor_entity_1.Zonadolor,
                        satisfaccion_inteligencia_artificial_entity_1.SatisfaccionInteligenciaArtificial,
                    ],
                    synchronize: true,
                    logging: false,
                }),
            }),
            persona_module_1.PersonaModule,
            paciente_module_1.PacienteModule,
            act_basicas_module_1.ActBasicasModule,
            act_instrumental_module_1.ActInstrumentalModule,
            alerta_module_1.AlertaModule,
            andrologico_module_1.AndrologicoModule,
            antecedentes_familiares_module_1.AntecedentesFamiliaresModule,
            antecedentes_nutri_module_1.AntecedentesnutriModule,
            cognitivo_module_1.CognitivoModule,
            cribaje_module_1.CribajeModule,
            datos_antropometricos_module_1.DatosantropometricosModule,
            datos_generales_module_1.DatosGeneralesModule,
            depresion_module_1.DepresionModule,
            diagnostico_module_1.DiagnosticoModule,
            dolor_fisio_module_1.DolorFisioModule,
            enfermeria_module_1.EnfermeriaModule,
            ginecologico_module_1.GinecologicoModule,
            habitos_module_1.HabitosModule,
            medicina_module_1.MedicinaModule,
            nutricion_module_1.NutricionModule,
            persona_ficha_module_1.PersonaFichaModule,
            recurso_social_module_1.RecursoSocialModule,
            revision_actual_module_1.RevisionActualModule,
            seguimiento_fisioterapia_module_1.SeguimientoFisioterapiaModule,
            seguimiento_salud_module_1.SeguimientoSaludModule,
            sindromes_geriatricos_module_1.SindromesGeriatricosModule,
            tamizaje_module_1.TamizajeModule,
            equilibrio_dinamico_module_1.EquilibrioDinamicoModule,
            equilibrio_estatico_module_1.EquilibrioEstaticoModule,
            evaluacion_module_1.EvaluacionModule,
            examen_regional_module_1.ExamenRegionalModule,
            examen_sistemico_module_1.ExamenSistemicoModule,
            farmacologico_module_1.FarmacologicoModule,
            fisioterapia_module_1.FisioterapiaModule,
            fuerza_module_1.FuerzaModule,
            general_module_1.GeneralModule,
            otros_riesgos_module_1.OtrosRiesgosModule,
            patologico_module_1.PatologicoModule,
            tono_muscular_module_1.TonoMuscularModule,
            usuarios_module_1.UsuariosModule,
            zonadolor_module_1.ZonadolorModule,
            fichas_general_completa_module_1.FichasGeneralCompletaModule,
            nutricioncompleto_module_1.NutricioncompletoModule,
            satisfaccion_inteligencia_artificial_module_1.SatisfaccionInteligenciaArtificialModule,
            resumen_nutricional_module_1.ResumenNutricionalModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map