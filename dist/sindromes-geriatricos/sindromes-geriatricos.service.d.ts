import { Repository } from 'typeorm';
import { CreateSindromesGeriatricoDto } from './dto/create-sindromes-geriatrico.dto';
import { UpdateSindromesGeriatricoDto } from './dto/update-sindromes-geriatrico.dto';
import { Sindromesgeriatricos } from './entities/sindromes-geriatrico.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class SindromesGeriatricosService {
    private sindromesGeriatricosRepository;
    private medicinaService;
    constructor(sindromesGeriatricosRepository: Repository<Sindromesgeriatricos>, medicinaService: MedicinaService);
    create(createSindromesGeriatricoDto: CreateSindromesGeriatricoDto): Promise<Sindromesgeriatricos>;
    findAll(): Promise<Sindromesgeriatricos[]>;
    findOne(id: number): Promise<Sindromesgeriatricos>;
    update(id: number, updateSindromesGeriatricoDto: UpdateSindromesGeriatricoDto): Promise<Sindromesgeriatricos>;
    remove(id: number): Promise<Sindromesgeriatricos>;
}
