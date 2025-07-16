import { Repository } from 'typeorm';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';
import { Habitos } from './entities/habito.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class HabitoService {
    private habitosRepository;
    private medicinaService;
    constructor(habitosRepository: Repository<Habitos>, medicinaService: MedicinaService);
    create(createHabitoDto: CreateHabitoDto): Promise<Habitos>;
    findAll(): Promise<Habitos[]>;
    findOne(id: number): Promise<Habitos>;
    update(id: number, updateHabitoDto: UpdateHabitoDto): Promise<Habitos>;
    remove(id: number): Promise<Habitos>;
}
