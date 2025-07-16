import { Medicina } from 'src/medicina/entities/medicina.entity';
export declare class Alerta {
    idmedicina: number;
    alertCaida: boolean | null;
    alertDismovilidad: boolean | null;
    alertAstenia: boolean | null;
    alertDesorientacion: boolean | null;
    alertComportamiento: boolean | null;
    idmedicina2: Medicina;
}
