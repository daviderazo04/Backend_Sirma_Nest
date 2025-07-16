import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Examensistemico {
    idmedicina: number;
    exsOrgsentidos: string | null;
    exsRespiratorio: string | null;
    exsCardiovascular: string | null;
    exsDigestivo: string | null;
    exsGenitourinario: string | null;
    exsMusculoesqueletico: string | null;
    exsEndocrino: string | null;
    exsHemolinfatico: string | null;
    exsNeurologico: string | null;
    idmedicina2: Medicina;
}
