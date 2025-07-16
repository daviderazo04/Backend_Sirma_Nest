import { CreateActBasicaNestedDto } from '../../act-basicas/dto/create-act-basica-nested.dto';
import { CreateActInstrumentalNestedDto } from '../../act-instrumental/dto/create-act-instrumental-nested.dto';
import { CreateCognitivoNestedDto } from '../../cognitivo/dto/create-cognitivo-nested.dto';
import { CreateDepresionNestedDto } from '../../depresion/dto/create-depresion-nested.dto';
import { CreateOtrosRiesgoNestedDto } from '../../otros-riesgos/dto/create-otros-riesgo-nested.dto';
import { CreateRecursoSocialNestedDto } from '../../recurso-social/dto/create-recurso-social-nested.dto';
import { CreateTamizajeNestedDto } from '../../tamizaje/dto/create-tamizaje-nested.dto';
export declare class CreateFullEnfermeriaDto {
    idficha: string;
    enfNombreencuestador?: string;
    enfObservaciones?: string;
    actbasica?: CreateActBasicaNestedDto;
    actinstrumental?: CreateActInstrumentalNestedDto;
    cognitivo?: CreateCognitivoNestedDto;
    depresion?: CreateDepresionNestedDto;
    otrosriesgos?: CreateOtrosRiesgoNestedDto;
    recursosocial?: CreateRecursoSocialNestedDto;
    tamizaje?: CreateTamizajeNestedDto;
}
