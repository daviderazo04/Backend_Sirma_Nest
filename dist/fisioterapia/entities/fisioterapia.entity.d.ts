import { Dolorfisio } from 'src/dolor-fisio/entities/dolor-fisio.entity';
import { Equilibriodinamico } from 'src/equilibrio-dinamico/entities/equilibrio-dinamico.entity';
import { Equilibrioestatico } from 'src/equilibrio-estatico/entities/equilibrio-estatico.entity';
import { Fuerza } from 'src/fuerza/entities/fuerza.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Tonomuscular } from 'src/tono-muscular/entities/tono-muscular.entity';
export declare class Fisioterapia {
    idfisioterapia: number;
    idficha: string;
    fisNombreencuestador: string | null;
    fisProblemasactual: string | null;
    fisMarcha: string | null;
    fisTraslado: string | null;
    fisDolor: number | null;
    fisPeso: number | null;
    fisTalla: number | null;
    fisDiscapacidad: number | null;
    dolorfisios: Dolorfisio[];
    equilibriodinamico: Equilibriodinamico;
    equilibrioestatico: Equilibrioestatico;
    idficha2: Paciente;
    fuerza: Fuerza;
    tonomuscular: Tonomuscular;
}
