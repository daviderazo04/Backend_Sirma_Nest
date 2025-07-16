import { Repository } from 'typeorm';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
import { Antecedentesnutri } from './entities/antecedentes-nutri.entity';
import { CreateAntecedentesnutriDto } from './dto/create-antecedentes-nutri.dto';
export declare class AntecedentesnutriService {
    private readonly antecedentesnutriRepository;
    private readonly nutricionRepository;
    constructor(antecedentesnutriRepository: Repository<Antecedentesnutri>, nutricionRepository: Repository<Nutricion>);
    create(createAntecedentesnutriDto: CreateAntecedentesnutriDto): Promise<Antecedentesnutri>;
    findAll(): Promise<Antecedentesnutri[]>;
    findOne(id: number): Promise<Antecedentesnutri>;
    update(id: number, updateAntecedentesnutriDto: CreateAntecedentesnutriDto): Promise<Antecedentesnutri>;
    remove(id: number): Promise<{
        affected?: number;
    }>;
}
