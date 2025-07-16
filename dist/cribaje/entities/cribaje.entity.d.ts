import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
export declare class Cribaje {
    idnutricion: number;
    criPerdidaapetito: number | null;
    criPerdidapeso: number | null;
    criMovilidad: number | null;
    criEnfermedadaguda: number | null;
    criNeuropsico: number | null;
    criImc: number | null;
    criTotales: number | null;
    idnutricion2: Nutricion;
}
