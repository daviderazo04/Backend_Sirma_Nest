import { Repository } from 'typeorm';
import { Actbasicas } from './entities/act-basica.entity';
import { CreateActBasicasDto } from './dto/create-act-basica.dto';
import { UpdateActBasicaDto } from './dto/update-act-basica.dto';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';
export declare class ActBasicasService {
    private actBasicasRepository;
    private enfermeriaService;
    constructor(actBasicasRepository: Repository<Actbasicas>, enfermeriaService: EnfermeriaService);
    create(createDto: CreateActBasicasDto): Promise<Actbasicas>;
    findAll(): Promise<Actbasicas[]>;
    findOne(id: number): Promise<Actbasicas>;
    update(id: number, updateDto: UpdateActBasicaDto): Promise<Actbasicas>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
