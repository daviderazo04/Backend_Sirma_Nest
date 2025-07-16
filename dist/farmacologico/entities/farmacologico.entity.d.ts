import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Farmacologico {
    idmedicina: number;
    farAines: boolean | null;
    farAnalgesicos: boolean | null;
    farAntidiabeticos: string | null;
    farAntihipertensivos: boolean | null;
    farAnticoagulantes: boolean | null;
    farPsicofarmacos: boolean | null;
    farAntibioticos: boolean | null;
    farAlergias: boolean | null;
    farEfectosadversos: boolean | null;
    farPoliprescriptor: boolean | null;
    farPolifarmacia: boolean | null;
    farOtros: boolean | null;
    farObservaciones: string | null;
    idmedicina2: Medicina;
}
