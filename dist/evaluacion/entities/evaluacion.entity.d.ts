import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
export declare class Evaluacion {
    idnutricion: number;
    evaVivedomicilio: number | null;
    evaMastresmedicinas: number | null;
    evaUlceralesioncutanea: number | null;
    evaComidacompleta: number | null;
    evaConsumepaciente: string | null;
    evaFrutaverdura: number | null;
    evaVasosagua: string | null;
    evaFormaalimento: number | null;
    evaBiennutrido: number | null;
    evaEstadosalud: string | null;
    evaCircunbraquial: string | null;
    evaCircunpantorrilla: number | null;
    evaTotal: number | null;
    idnutricion2: Nutricion;
}
