import { Antecedentesnutri } from 'src/antecedentes-nutri/entities/antecedentes-nutri.entity';
import { Cribaje } from 'src/cribaje/entities/cribaje.entity';
import { Datosantropometricos } from 'src/datos-antropometricos/entities/datos-antropometrico.entity';
import { Evaluacion } from 'src/evaluacion/entities/evaluacion.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
export declare class Nutricion {
    idnutricion: number;
    idficha: string;
    nutNombreencuestador: string | null;
    nutEvalglobal: string | null;
    nutEstadonutricional: number | null;
    antecedentesnutri: Antecedentesnutri;
    cribaje: Cribaje;
    datosantropometricos: Datosantropometricos;
    evaluacion: Evaluacion;
    idficha2: Paciente;
}
