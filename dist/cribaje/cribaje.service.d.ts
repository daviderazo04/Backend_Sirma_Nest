import { Repository } from 'typeorm';
import { Cribaje } from './entities/cribaje.entity';
import { CreateCribajeDto } from './dto/create-cribaje.dto';
import { Nutricion } from '../nutricion/entities/nutricion.entity';
import { UpdateCribajeDto } from './dto/update-cribaje.dto';
export declare class CribajeService {
    private cribajeRepository;
    private nutricionRepository;
    constructor(cribajeRepository: Repository<Cribaje>, nutricionRepository: Repository<Nutricion>);
    create(createCribajeDto: CreateCribajeDto): Promise<Cribaje>;
    findAll(): Promise<Cribaje[]>;
    findOne(id: number): Promise<Cribaje>;
    update(idnutricion: number, updateCribajeDto: UpdateCribajeDto): Promise<Cribaje>;
    remove(idnutricion: number): Promise<void>;
}
