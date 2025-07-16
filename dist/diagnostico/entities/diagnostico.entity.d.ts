import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Diagnostico {
    idmedicina: number;
    diagDiagnostico: string | null;
    diagPresundefini: string | null;
    diagCie: string | null;
    diagClinicocindromico: string | null;
    idmedicina2: Medicina;
}
