import { Repository } from 'typeorm';
import { CreateFuerzaDto } from './dto/create-fuerza.dto';
import { UpdateFuerzaDto } from './dto/update-fuerza.dto';
import { Fuerza } from './entities/fuerza.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service';
export declare class FuerzaService {
    private fuerzaRepository;
    private fisioterapiaService;
    constructor(fuerzaRepository: Repository<Fuerza>, fisioterapiaService: FisioterapiaService);
    create(createFuerzaDto: CreateFuerzaDto): Promise<Fuerza>;
    findAll(): Promise<Fuerza[]>;
    findOne(idfisioterapia: number): Promise<Fuerza>;
    update(idfisioterapia: number, updateFuerzaDto: UpdateFuerzaDto): Promise<Fuerza>;
    remove(idfisioterapia: number): Promise<void>;
}
