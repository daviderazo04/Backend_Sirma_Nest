import { Repository } from 'typeorm';
import { Actinstrumental } from './entities/act-instrumental.entity';
import { CreateActInstrumentalDto } from './dto/create-act-instrumental.dto';
import { UpdateActInstrumentalDto } from './dto/update-act-instrumental.dto';
import { EnfermeriaService } from 'src/enfermeria/enfermeria.service';
export declare class ActInstrumentalService {
    private actInstrumentalRepository;
    private enfermeriaService;
    constructor(actInstrumentalRepository: Repository<Actinstrumental>, enfermeriaService: EnfermeriaService);
    create(createDto: CreateActInstrumentalDto): Promise<Actinstrumental>;
    findAll(): Promise<Actinstrumental[]>;
    findOne(id: number): Promise<Actinstrumental>;
    update(id: number, updateDto: UpdateActInstrumentalDto): Promise<Actinstrumental>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
