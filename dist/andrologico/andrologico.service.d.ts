import { Repository } from 'typeorm';
import { CreateAndrologicoDto } from './dto/create-andrologico.dto';
import { UpdateAndrologicoDto } from './dto/update-andrologico.dto';
import { Andrologico } from './entities/andrologico.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class AndrologicoService {
    private andrologicoRepository;
    private medicinaService;
    constructor(andrologicoRepository: Repository<Andrologico>, medicinaService: MedicinaService);
    create(createAndrologicoDto: CreateAndrologicoDto): Promise<Andrologico>;
    findAll(): Promise<Andrologico[]>;
    findOne(id: number): Promise<Andrologico>;
    update(id: number, updateAndrologicoDto: UpdateAndrologicoDto): Promise<Andrologico>;
    remove(id: number): Promise<Andrologico>;
}
