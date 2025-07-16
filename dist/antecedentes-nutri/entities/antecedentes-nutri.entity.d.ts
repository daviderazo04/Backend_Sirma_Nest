import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
export declare class Antecedentesnutri {
    idnutricion: number;
    anDietabalanceada: boolean | null;
    anDentalescompletas: boolean | null;
    anDificultadmasticar: boolean | null;
    anEstrenimientofrecu: boolean | null;
    anDiarreafrecu: boolean | null;
    anAlergiaalimentaria: boolean | null;
    anDesayuno: string | null;
    anAlmuerzo: string | null;
    anCena: string | null;
    anSnacks: string | null;
    anPreferencias: string | null;
    anQuiencocina: string | null;
    idnutricion2: Nutricion;
}
