import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Patologico {
    idmedicina: number;
    patoDermatologico: boolean | null;
    patoVisuales: boolean | null;
    patoOtorrino: boolean | null;
    patoEstomatologicos: boolean | null;
    patoEndocrinos: boolean | null;
    patoCardiovasculares: boolean | null;
    patoRespiratorio: boolean | null;
    patoDigestivo: boolean | null;
    patoNeurologico: boolean | null;
    patoUrologico: boolean | null;
    patoHemolinfatico: boolean | null;
    patoInfeccioso: boolean | null;
    patoOncologico: boolean | null;
    patoMusculoesqueletico: boolean | null;
    patoPsiquiatrico: boolean | null;
    patoQuirurgico: boolean | null;
    patoObservaciones: string | null;
    idmedicina2: Medicina;
}
