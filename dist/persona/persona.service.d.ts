import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { GrupoEdadDto } from './dto/grupo-edad.dto';
export declare class PersonaService {
    private readonly personaRepository;
    constructor(personaRepository: Repository<Persona>);
    create(createPersonaDto: CreatePersonaDto): Promise<Persona>;
    findAll(): Promise<Persona[]>;
    findOne(id: number): Promise<Persona>;
    update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona>;
    remove(id: number): Promise<void>;
    findByCedula(cedula: string): Promise<Persona>;
    obtenerGruposEdad(): Promise<GrupoEdadDto[]>;
    personasPorSexo(): Promise<any[]>;
    personasPorEstadoCivil(): Promise<any[]>;
    personasPorZona(): Promise<any[]>;
    personasPorOcupacion(): Promise<any[]>;
    personasPorInstruccion(): Promise<any[]>;
    personasPorComunidad(): Promise<any[]>;
    personasPorCuidador(): Promise<any[]>;
}
