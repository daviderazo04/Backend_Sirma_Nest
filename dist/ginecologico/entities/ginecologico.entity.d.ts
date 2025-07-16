import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Ginecologico {
    idmedicina: number;
    ginEdadmenopausia: number | null;
    ginEdadultmamografia: number | null;
    ginEdadultcitologia: number | null;
    ginCantembarazos: number | null;
    ginCantpartos: number | null;
    ginCantcesareas: number | null;
    ginTerapiahormonal: boolean | null;
    ginObservaciones: string | null;
    idmedicina2: Medicina;
}
