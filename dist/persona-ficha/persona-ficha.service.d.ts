import { Repository } from 'typeorm';
import { PersonaFicha } from './entities/persona-ficha.entity';
import { CreatePersonaFichaDto } from './dto/create-persona-ficha.dto';
import { UpdatePersonaFichaDto } from './dto/update-persona-ficha.dto';
export declare class PersonaFichaService {
    private readonly personaFichaRepository;
    constructor(personaFichaRepository: Repository<PersonaFicha>);
    create(createPersonaFichaDto: CreatePersonaFichaDto): Promise<PersonaFicha>;
    findAll(): Promise<PersonaFicha[]>;
    findOne(id: number): Promise<PersonaFicha>;
    update(id: number, updatePersonaFichaDto: UpdatePersonaFichaDto): Promise<PersonaFicha>;
    remove(id: number): Promise<void>;
}
