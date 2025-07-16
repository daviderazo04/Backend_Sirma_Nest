import { PersonaFicha } from 'src/persona-ficha/entities/persona-ficha.entity';
export declare class Persona {
    idpersona: number;
    perComunidad: string | null;
    perZona: number | null;
    perGeorreferenciacion: string | null;
    perPrimernombre: string | null;
    perSegundonombre: string | null;
    perPrimerapellido: string | null;
    perSegundoapellido: string | null;
    perCedula: string | null;
    perFechanacimiento: string | null;
    perEdad: number | null;
    perSexo: string | null;
    perEstadocivil: string | null;
    perOcupacion: string | null;
    perInstruccion: string | null;
    perCuidador: string | null;
    personaFichas: PersonaFicha[];
}
