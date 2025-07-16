import { Repository } from 'typeorm';
import { CreateEquilibrioDinamicoDto } from './dto/create-equilibrio-dinamico.dto';
import { UpdateEquilibrioDinamicoDto } from './dto/update-equilibrio-dinamico.dto';
import { Equilibriodinamico } from './entities/equilibrio-dinamico.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service';
export declare class EquilibrioDinamicoService {
    private equilibriodinamicoRepository;
    private fisioterapiaService;
    constructor(equilibriodinamicoRepository: Repository<Equilibriodinamico>, fisioterapiaService: FisioterapiaService);
    create(createEquilibrioDinamicoDto: CreateEquilibrioDinamicoDto): Promise<Equilibriodinamico>;
    findAll(): Promise<Equilibriodinamico[]>;
    findOne(idfisioterapia: number): Promise<Equilibriodinamico>;
    update(idfisioterapia: number, updateEquilibrioDinamicoDto: UpdateEquilibrioDinamicoDto): Promise<Equilibriodinamico>;
    remove(idfisioterapia: number): Promise<void>;
}
