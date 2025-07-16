import { Repository } from 'typeorm';
import { CreateDepresionDto } from './dto/create-depresion.dto';
import { UpdateDepresionDto } from './dto/update-depresion.dto';
import { Depresion } from './entities/depresion.entity';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';
export declare class DepresionService {
    private depresionRepository;
    private enfermeriaService;
    constructor(depresionRepository: Repository<Depresion>, enfermeriaService: EnfermeriaService);
    create(createDepresionDto: CreateDepresionDto): Promise<Depresion>;
    findAll(): Promise<Depresion[]>;
    findOne(id: number): Promise<Depresion>;
    update(id: number, updateDepresionDto: UpdateDepresionDto): Promise<Depresion>;
    remove(id: number): Promise<Depresion>;
}
