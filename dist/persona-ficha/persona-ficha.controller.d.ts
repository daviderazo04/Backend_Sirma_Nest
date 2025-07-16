import { PersonaFichaService } from './persona-ficha.service';
import { CreatePersonaFichaDto } from './dto/create-persona-ficha.dto';
import { UpdatePersonaFichaDto } from './dto/update-persona-ficha.dto';
import { PersonaFicha } from './entities/persona-ficha.entity';
export declare class PersonaFichaController {
    private readonly personaFichaService;
    constructor(personaFichaService: PersonaFichaService);
    create(createPersonaFichaDto: CreatePersonaFichaDto): Promise<PersonaFicha>;
    findAll(): Promise<PersonaFicha[]>;
    findOne(id: string): Promise<PersonaFicha>;
    update(id: string, updatePersonaFichaDto: UpdatePersonaFichaDto): Promise<PersonaFicha>;
    remove(id: string): Promise<void>;
}
