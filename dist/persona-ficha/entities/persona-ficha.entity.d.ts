import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Persona } from 'src/persona/entities/persona.entity';
export declare class PersonaFicha {
    idpersonaficha: number;
    idficha: string | null;
    idpersona: number | null;
    idficha2: Paciente;
    idpersona2: Persona;
}
