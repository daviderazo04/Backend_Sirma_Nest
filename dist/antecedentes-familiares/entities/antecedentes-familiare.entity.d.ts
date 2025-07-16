import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Antecedentesfamiliares {
    idmedicina: number;
    afCardiopatias: boolean | null;
    afDiabetes: boolean | null;
    afHipertension: boolean | null;
    afNeoplasia: boolean | null;
    afAlzheimer: boolean | null;
    afParkinson: boolean | null;
    afTuberculosis: boolean | null;
    afViolenciaintra: boolean | null;
    afSindromecuidador: boolean | null;
    afObservaciones: string | null;
    idmedicina2: Medicina;
}
