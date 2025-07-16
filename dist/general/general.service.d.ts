import { Repository } from 'typeorm';
import { CreateGeneralDto } from './dto/create-general.dto';
import { UpdateGeneralDto } from './dto/update-general.dto';
import { General } from './entities/general.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class GeneralService {
    private generalRepository;
    private medicinaService;
    constructor(generalRepository: Repository<General>, medicinaService: MedicinaService);
    create(createGeneralDto: CreateGeneralDto): Promise<General>;
    findAll(): Promise<General[]>;
    findOne(id: number): Promise<General>;
    update(id: number, updateGeneralDto: UpdateGeneralDto): Promise<General>;
    remove(id: number): Promise<General>;
}
