import { Repository } from 'typeorm';
import { Cognitivo } from './entities/cognitivo.entity';
import { CreateCognitivoDto } from './dto/create-cognitivo.dto';
import { UpdateCognitivoDto } from './dto/update-cognitivo.dto';
import { EnfermeriaService } from 'src/enfermeria/enfermeria.service';
export declare class CognitivoService {
    private cognitivoRepository;
    private enfermeriaService;
    constructor(cognitivoRepository: Repository<Cognitivo>, enfermeriaService: EnfermeriaService);
    create(createCognitivoDto: CreateCognitivoDto): Promise<Cognitivo>;
    findAll(): Promise<Cognitivo[]>;
    findOne(id: number): Promise<Cognitivo>;
    update(id: number, updateCognitivoDto: UpdateCognitivoDto): Promise<Cognitivo>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
