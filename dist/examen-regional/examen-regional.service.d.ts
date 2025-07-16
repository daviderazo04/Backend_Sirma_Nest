import { Repository } from 'typeorm';
import { CreateExamenRegionalDto } from './dto/create-examen-regional.dto';
import { UpdateExamenRegionalDto } from './dto/update-examen-regional.dto';
import { Examenregional } from './entities/examen-regional.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class ExamenRegionalService {
    private examenRegionalRepository;
    private medicinaService;
    constructor(examenRegionalRepository: Repository<Examenregional>, medicinaService: MedicinaService);
    create(createExamenRegionalDto: CreateExamenRegionalDto): Promise<Examenregional>;
    findAll(): Promise<Examenregional[]>;
    findOne(id: number): Promise<Examenregional>;
    update(id: number, updateExamenRegionalDto: UpdateExamenRegionalDto): Promise<Examenregional>;
    remove(id: number): Promise<Examenregional>;
}
