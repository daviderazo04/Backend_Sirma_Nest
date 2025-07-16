import { Repository } from 'typeorm';
import { CreateExamenSistemicoDto } from './dto/create-examen-sistemico.dto';
import { UpdateExamenSistemicoDto } from './dto/update-examen-sistemico.dto';
import { Examensistemico } from './entities/examen-sistemico.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class ExamenSistemicoService {
    private examenSistemicoRepository;
    private medicinaService;
    constructor(examenSistemicoRepository: Repository<Examensistemico>, medicinaService: MedicinaService);
    create(createExamenSistemicoDto: CreateExamenSistemicoDto): Promise<Examensistemico>;
    findAll(): Promise<Examensistemico[]>;
    findOne(id: number): Promise<Examensistemico>;
    update(id: number, updateExamenSistemicoDto: UpdateExamenSistemicoDto): Promise<Examensistemico>;
    remove(id: number): Promise<Examensistemico>;
}
