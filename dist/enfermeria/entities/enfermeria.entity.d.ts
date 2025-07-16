import { Actbasicas } from 'src/act-basicas/entities/act-basica.entity';
import { Actinstrumental } from 'src/act-instrumental/entities/act-instrumental.entity';
import { Cognitivo } from 'src/cognitivo/entities/cognitivo.entity';
import { Depresion } from 'src/depresion/entities/depresion.entity';
import { Otrosriesgos } from 'src/otros-riesgos/entities/otros-riesgo.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Recursosocial } from 'src/recurso-social/entities/recurso-social.entity';
import { Tamizaje } from 'src/tamizaje/entities/tamizaje.entity';
export declare class Enfermeria {
    idenfermeria: number;
    idficha: string;
    enfNombreencuestador: string | null;
    enfObservaciones: string | null;
    actbasica: Actbasicas;
    actinstrumental: Actinstrumental;
    cognitivo: Cognitivo;
    depresion: Depresion;
    idficha2: Paciente;
    otrosriesgos: Otrosriesgos;
    recursosocial: Recursosocial;
    tamizaje: Tamizaje;
}
