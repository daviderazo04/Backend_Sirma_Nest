import { Paciente } from 'src/paciente/entities/paciente.entity';
export declare class Seguimientosalud {
    idseguimientosalud: number;
    idficha: string | null;
    ssNombreencuestador: string | null;
    ssFechaevolucion: string | null;
    ssHoraevolucion: string | null;
    ssNotas: string | null;
    ssIndicanofarma: string | null;
    ssIndicafarma: string | null;
    idficha2: Paciente;
}
