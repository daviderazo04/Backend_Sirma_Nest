import { Repository } from 'typeorm';
import { CreateGinecologicoDto } from './dto/create-ginecologico.dto';
import { UpdateGinecologicoDto } from './dto/update-ginecologico.dto';
import { Ginecologico } from './entities/ginecologico.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class GinecologicoService {
    private ginecologicoRepository;
    private medicinaService;
    constructor(ginecologicoRepository: Repository<Ginecologico>, medicinaService: MedicinaService);
    create(createGinecologicoDto: CreateGinecologicoDto): Promise<Ginecologico>;
    findAll(): Promise<Ginecologico[]>;
    findOne(id: number): Promise<Ginecologico>;
    update(id: number, updateGinecologicoDto: UpdateGinecologicoDto): Promise<Ginecologico>;
    remove(id: number): Promise<Ginecologico>;
}
