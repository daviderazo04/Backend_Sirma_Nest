import { Repository } from 'typeorm';
import { CreateFarmacologicoDto } from './dto/create-farmacologico.dto';
import { UpdateFarmacologicoDto } from './dto/update-farmacologico.dto';
import { Farmacologico } from './entities/farmacologico.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class FarmacologicoService {
    private farmacologicoRepository;
    private medicinaService;
    constructor(farmacologicoRepository: Repository<Farmacologico>, medicinaService: MedicinaService);
    create(createFarmacologicoDto: CreateFarmacologicoDto): Promise<Farmacologico>;
    findAll(): Promise<Farmacologico[]>;
    findOne(id: number): Promise<Farmacologico>;
    update(id: number, updateFarmacologicoDto: UpdateFarmacologicoDto): Promise<Farmacologico>;
    remove(id: number): Promise<Farmacologico>;
}
