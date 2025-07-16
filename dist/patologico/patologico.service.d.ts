import { Repository } from 'typeorm';
import { CreatePatologicoDto } from './dto/create-patologico.dto';
import { UpdatePatologicoDto } from './dto/update-patologico.dto';
import { Patologico } from './entities/patologico.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class PatologicoService {
    private patologicoRepository;
    private medicinaService;
    constructor(patologicoRepository: Repository<Patologico>, medicinaService: MedicinaService);
    create(createPatologicoDto: CreatePatologicoDto): Promise<Patologico>;
    findAll(): Promise<Patologico[]>;
    findOne(id: number): Promise<Patologico>;
    update(id: number, updatePatologicoDto: UpdatePatologicoDto): Promise<Patologico>;
    remove(id: number): Promise<Patologico>;
}
