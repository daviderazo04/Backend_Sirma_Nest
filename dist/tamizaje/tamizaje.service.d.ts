import { Repository } from 'typeorm';
import { Tamizaje } from './entities/tamizaje.entity';
import { CreateTamizajeDto } from './dto/create-tamizaje.dto';
import { UpdateTamizajeDto } from './dto/update-tamizaje.dto';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';
export declare class TamizajeService {
    private tamizajeRepository;
    private enfermeriaService;
    constructor(tamizajeRepository: Repository<Tamizaje>, enfermeriaService: EnfermeriaService);
    create(createDto: CreateTamizajeDto): Promise<Tamizaje>;
    findAll(): Promise<Tamizaje[]>;
    findOne(id: number): Promise<Tamizaje>;
    update(id: number, updateDto: UpdateTamizajeDto): Promise<Tamizaje>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
