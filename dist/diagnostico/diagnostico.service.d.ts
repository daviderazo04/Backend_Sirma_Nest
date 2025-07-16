import { Repository } from 'typeorm';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { Diagnostico } from './entities/diagnostico.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class DiagnosticoService {
    private diagnosticoRepository;
    private medicinaService;
    constructor(diagnosticoRepository: Repository<Diagnostico>, medicinaService: MedicinaService);
    create(createDiagnosticoDto: CreateDiagnosticoDto): Promise<Diagnostico>;
    findAll(): Promise<Diagnostico[]>;
    findOne(id: number): Promise<Diagnostico>;
    update(id: number, updateDiagnosticoDto: UpdateDiagnosticoDto): Promise<Diagnostico>;
    remove(id: number): Promise<Diagnostico>;
}
