import { Repository } from 'typeorm';
import { CreateEquilibrioEstaticoDto } from './dto/create-equilibrio-estatico.dto';
import { UpdateEquilibrioEstaticoDto } from './dto/update-equilibrio-estatico.dto';
import { Equilibrioestatico } from './entities/equilibrio-estatico.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service';
export declare class EquilibrioEstaticoService {
    private equilibrioestaticoRepository;
    private fisioterapiaService;
    constructor(equilibrioestaticoRepository: Repository<Equilibrioestatico>, fisioterapiaService: FisioterapiaService);
    create(createEquilibrioEstaticoDto: CreateEquilibrioEstaticoDto): Promise<Equilibrioestatico>;
    findAll(): Promise<Equilibrioestatico[]>;
    findOne(idfisioterapia: number): Promise<Equilibrioestatico>;
    update(idfisioterapia: number, updateEquilibrioEstaticoDto: UpdateEquilibrioEstaticoDto): Promise<Equilibrioestatico>;
    remove(idfisioterapia: number): Promise<void>;
}
