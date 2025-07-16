import { Enfermeria } from 'src/enfermeria/entities/enfermeria.entity';
export declare class Tamizaje {
    idenfermeria: number;
    tamDifvisual: boolean | null;
    tamDifauditiva: boolean | null;
    tamLevanteanda: boolean | null;
    tamPerdidaorina: boolean | null;
    tamPerdidapeso: boolean | null;
    tamPerdidamemoria: boolean | null;
    tamTristedeprimido: boolean | null;
    tamBanarsolo: boolean | null;
    tamComprasolo: boolean | null;
    tamVivesolo: boolean | null;
    tamTotal: number | null;
    idenfermeria2: Enfermeria;
}
