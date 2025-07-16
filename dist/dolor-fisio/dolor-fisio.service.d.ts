import { Repository } from 'typeorm';
import { CreateDolorFisioDto } from './dto/create-dolor-fisio.dto';
import { UpdateDolorFisioDto } from './dto/update-dolor-fisio.dto';
import { Dolorfisio } from './entities/dolor-fisio.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service';
import { ZonadolorService } from '../zonadolor/zonadolor.service';
export declare class DolorFisioService {
    private dolorfisioRepository;
    private fisioterapiaService;
    private zonadolorService;
    constructor(dolorfisioRepository: Repository<Dolorfisio>, fisioterapiaService: FisioterapiaService, zonadolorService: ZonadolorService);
    create(createDolorFisioDto: CreateDolorFisioDto): Promise<Dolorfisio>;
    findAll(): Promise<Dolorfisio[]>;
    findOne(iddolorfisio: number): Promise<Dolorfisio>;
    update(iddolorfisio: number, updateDolorFisioDto: UpdateDolorFisioDto): Promise<Dolorfisio>;
    remove(iddolorfisio: number): Promise<void>;
    deleteByFisioterapiaId(idfisioterapia: number): Promise<void>;
}
