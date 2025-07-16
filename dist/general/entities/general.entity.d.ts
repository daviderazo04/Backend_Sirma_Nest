import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class General {
    idmedicina: number;
    genVacunascompletas: boolean | null;
    genHigienecuerpo: boolean | null;
    genControlsalud: boolean | null;
    genHigieneoral: boolean | null;
    genActrecreativa: boolean | null;
    genOtrossaludables: boolean | null;
    genObservaciones: string | null;
    idmedicina2: Medicina;
}
