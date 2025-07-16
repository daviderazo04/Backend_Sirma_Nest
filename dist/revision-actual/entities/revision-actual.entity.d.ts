import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Revisionactual {
    idmedicina: number;
    revactVision: boolean | null;
    revactAudicion: boolean | null;
    revactOlfatogusto: boolean | null;
    revactRespiratorio: boolean | null;
    revactCardiovascular: boolean | null;
    revactDigestivo: boolean | null;
    revactGenital: boolean | null;
    revactUrinario: boolean | null;
    revactMusculoesqueletico: boolean | null;
    revactEndocrino: boolean | null;
    revactHemolinf: boolean | null;
    revactNervioso: boolean | null;
    revactMetabolico: boolean | null;
    revactObservaciones: string | null;
    idmedicina2: Medicina;
}
