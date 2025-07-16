import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Habitos {
    idmedicina: number;
    nocTabaquismo: boolean | null;
    nocAlcoholismo: boolean | null;
    nocAdicciones: boolean | null;
    nocOtros: boolean | null;
    nocObservaciones: string | null;
    idmedicina2: Medicina;
}
