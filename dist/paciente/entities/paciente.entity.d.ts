import { Datosgenerales } from 'src/datos-generales/entities/datos-generale.entity';
import { Enfermeria } from 'src/enfermeria/entities/enfermeria.entity';
import { Fisioterapia } from 'src/fisioterapia/entities/fisioterapia.entity';
import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
import { PersonaFicha } from 'src/persona-ficha/entities/persona-ficha.entity';
import { Seguimientofisioterapia } from 'src/seguimiento-fisioterapia/entities/seguimiento-fisioterapia.entity';
import { Seguimientosalud } from 'src/seguimiento-salud/entities/seguimiento-salud.entity';
export declare class Paciente {
    idficha: string;
    pacFechaprimercontacto: string | null;
    pacEstadogeneral: string | null;
    pacObservaciones: string | null;
    datosgenerales: Datosgenerales[];
    enfermerias: Enfermeria[];
    fisioterapias: Fisioterapia[];
    medicinas: Medicina[];
    nutricions: Nutricion[];
    personaFichas: PersonaFicha[];
    seguimientofisioterapias: Seguimientofisioterapia[];
    seguimientosaluds: Seguimientosalud[];
}
