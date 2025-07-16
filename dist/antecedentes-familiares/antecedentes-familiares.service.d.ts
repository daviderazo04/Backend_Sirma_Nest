import { Repository } from 'typeorm';
import { CreateAntecedentesFamiliareDto } from './dto/create-antecedentes-familiare.dto';
import { UpdateAntecedentesFamiliareDto } from './dto/update-antecedentes-familiare.dto';
import { Antecedentesfamiliares } from './entities/antecedentes-familiare.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class AntecedentesfamiliaresService {
    private antecedentesfamiliaresRepository;
    private medicinaService;
    constructor(antecedentesfamiliaresRepository: Repository<Antecedentesfamiliares>, medicinaService: MedicinaService);
    create(createAntecedentesFamiliareDto: CreateAntecedentesFamiliareDto): Promise<Antecedentesfamiliares>;
    findAll(): Promise<Antecedentesfamiliares[]>;
    findOne(id: number): Promise<Antecedentesfamiliares>;
    update(id: number, updateAntecedentesfamiliaresDto: UpdateAntecedentesFamiliareDto): Promise<Antecedentesfamiliares>;
    remove(id: number): Promise<Antecedentesfamiliares>;
}
