import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Entidades principales
import { Persona } from './persona/entities/persona.entity';
import { Paciente } from './paciente/entities/paciente.entity';
import { PersonaFicha } from './persona-ficha/entities/persona-ficha.entity';
import { Datosgenerales } from './datos-generales/entities/datos-generale.entity';
import { Actbasicas } from './act-basicas/entities/act-basica.entity';
import { Actinstrumental } from './act-instrumental/entities/act-instrumental.entity';
import { Alerta } from './alerta/entities/alerta.entity';
import { Andrologico } from './andrologico/entities/andrologico.entity';
import { Antecedentesfamiliares } from './antecedentes-familiares/entities/antecedentes-familiare.entity';
import { Antecedentesnutri } from './antecedentes-nutri/entities/antecedentes-nutri.entity';
import { Cognitivo } from './cognitivo/entities/cognitivo.entity';
import { Cribaje } from './cribaje/entities/cribaje.entity';
import { Datosantropometricos } from './datos-antropometricos/entities/datos-antropometrico.entity';
import { Depresion } from './depresion/entities/depresion.entity';
import { Diagnostico } from './diagnostico/entities/diagnostico.entity';
import { Dolorfisio } from './dolor-fisio/entities/dolor-fisio.entity';
import { Enfermeria } from './enfermeria/entities/enfermeria.entity';
import { Ginecologico } from './ginecologico/entities/ginecologico.entity';
import { Habitos } from './habitos/entities/habito.entity';
import { Medicina } from './medicina/entities/medicina.entity';
import { Nutricion } from './nutricion/entities/nutricion.entity';
import { Recursosocial } from './recurso-social/entities/recurso-social.entity';
import { Revisionactual } from './revision-actual/entities/revision-actual.entity';
import { Seguimientofisioterapia } from './seguimiento-fisioterapia/entities/seguimiento-fisioterapia.entity';
import { Seguimientosalud } from './seguimiento-salud/entities/seguimiento-salud.entity';
import { Sindromesgeriatricos } from './sindromes-geriatricos/entities/sindromes-geriatrico.entity';
import { Tamizaje } from './tamizaje/entities/tamizaje.entity';
import { Equilibriodinamico } from './equilibrio-dinamico/entities/equilibrio-dinamico.entity';
import { Equilibrioestatico } from './equilibrio-estatico/entities/equilibrio-estatico.entity';
import { Evaluacion } from './evaluacion/entities/evaluacion.entity';
import { Examenregional } from './examen-regional/entities/examen-regional.entity';
import { Examensistemico } from './examen-sistemico/entities/examen-sistemico.entity';
import { Farmacologico } from './farmacologico/entities/farmacologico.entity';
import { Fisioterapia } from './fisioterapia/entities/fisioterapia.entity';
import { Fuerza } from './fuerza/entities/fuerza.entity';
import { General } from './general/entities/general.entity';
import { Otrosriesgos } from './otros-riesgos/entities/otros-riesgo.entity';
import { Patologico } from './patologico/entities/patologico.entity';
import { Tonomuscular } from './tono-muscular/entities/tono-muscular.entity';
import { Usuarios } from './usuarios/entities/usuario.entity';
import { Zonadolor } from './zonadolor/entities/zonadolor.entity';

// Módulos
import { PacienteModule } from './paciente/paciente.module';
import { ActBasicasModule } from './act-basicas/act-basicas.module';
import { ActInstrumentalModule } from './act-instrumental/act-instrumental.module';
import { AlertaModule } from './alerta/alerta.module';
import { AndrologicoModule } from './andrologico/andrologico.module';
import { AntecedentesFamiliaresModule } from './antecedentes-familiares/antecedentes-familiares.module';
import { AntecedentesNutriModule } from './antecedentes-nutri/antecedentes-nutri.module';
import { CognitivoModule } from './cognitivo/cognitivo.module';
import { CribajeModule } from './cribaje/cribaje.module';
import { DatosAntropometricosModule } from './datos-antropometricos/datos-antropometricos.module';
import { DatosGeneralesModule } from './datos-generales/datos-generales.module';
import { DepresionModule } from './depresion/depresion.module';
import { DiagnosticoModule } from './diagnostico/diagnostico.module';
import { DolorFisioModule } from './dolor-fisio/dolor-fisio.module';
import { EnfermeriaModule } from './enfermeria/enfermeria.module';
import { GinecologicoModule } from './ginecologico/ginecologico.module';
import { HabitosModule } from './habitos/habitos.module';
import { MedicinaModule } from './medicina/medicina.module';
import { NutricionModule } from './nutricion/nutricion.module';
import { PersonaFichaModule } from './persona-ficha/persona-ficha.module';
import { RecursoSocialModule } from './recurso-social/recurso-social.module';
import { RevisionActualModule } from './revision-actual/revision-actual.module';
import { SeguimientoFisioterapiaModule } from './seguimiento-fisioterapia/seguimiento-fisioterapia.module';
import { SeguimientoSaludModule } from './seguimiento-salud/seguimiento-salud.module';
import { SindromesGeriatricosModule } from './sindromes-geriatricos/sindromes-geriatricos.module';
import { TamizajeModule } from './tamizaje/tamizaje.module';
import { EquilibrioDinamicoModule } from './equilibrio-dinamico/equilibrio-dinamico.module';
import { EquilibrioEstaticoModule } from './equilibrio-estatico/equilibrio-estatico.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { ExamenRegionalModule } from './examen-regional/examen-regional.module';
import { ExamenSistemicoModule } from './examen-sistemico/examen-sistemico.module';
import { FarmacologicoModule } from './farmacologico/farmacologico.module';
import { FisioterapiaModule } from './fisioterapia/fisioterapia.module';
import { FuerzaModule } from './fuerza/fuerza.module';
import { GeneralModule } from './general/general.module';
import { OtrosRiesgosModule } from './otros-riesgos/otros-riesgos.module';
import { PatologicoModule } from './patologico/patologico.module';
import { TonoMuscularModule } from './tono-muscular/tono-muscular.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ZonadolorModule } from './zonadolor/zonadolor.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [
          Persona,
          Paciente,
          PersonaFicha,
          Datosgenerales,
          Actbasicas,
          Actinstrumental,
          Alerta,
          Andrologico,
          Antecedentesfamiliares,
          Antecedentesnutri,
          Cognitivo,
          Cribaje,
          Datosantropometricos,
          Depresion,
          Diagnostico,
          Dolorfisio,
          Enfermeria,
          Ginecologico,
          Habitos,
          Medicina,
          Nutricion,
          Recursosocial,
          Revisionactual,
          Seguimientofisioterapia,
          Seguimientosalud,
          Sindromesgeriatricos,
          Tamizaje,
          Equilibriodinamico,
          Equilibrioestatico,
          Evaluacion,
          Examenregional,
          Examensistemico,
          Farmacologico,
          Fisioterapia,
          Fuerza,
          General,
          Otrosriesgos,
          Patologico,
          Tonomuscular,
          Usuarios,
          Zonadolor,
        ],
        synchronize: true, // Solo para desarrollo
        logging: true,
      }),
    }),
    PersonaModule,
    PacienteModule,
    ActBasicasModule,
    ActInstrumentalModule,
    AlertaModule,
    AndrologicoModule,
    AntecedentesFamiliaresModule,
    AntecedentesNutriModule,
    CognitivoModule,
    CribajeModule,
    DatosAntropometricosModule,
    DatosGeneralesModule,
    DepresionModule,
    DiagnosticoModule,
    DolorFisioModule,
    EnfermeriaModule,
    GinecologicoModule,
    HabitosModule,
    MedicinaModule,
    NutricionModule,
    PersonaFichaModule,
    RecursoSocialModule,
    RevisionActualModule,
    SeguimientoFisioterapiaModule,
    SeguimientoSaludModule,
    SindromesGeriatricosModule,
    TamizajeModule,
    EquilibrioDinamicoModule,
    EquilibrioEstaticoModule,
    EvaluacionModule,
    ExamenRegionalModule,
    ExamenSistemicoModule,
    FarmacologicoModule,
    FisioterapiaModule,
    FuerzaModule,
    GeneralModule,
    OtrosRiesgosModule,
    PatologicoModule,
    TonoMuscularModule,
    UsuariosModule,
    ZonadolorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
