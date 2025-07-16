import { AntecedentesnutriService } from './antecedentes-nutri.service';
import { CreateAntecedentesnutriDto } from './dto/create-antecedentes-nutri.dto';
import { Antecedentesnutri } from './entities/antecedentes-nutri.entity';
export declare class AntecedentesnutriController {
    private readonly antecedentesnutriService;
    constructor(antecedentesnutriService: AntecedentesnutriService);
    create(createAntecedentesnutriDto: CreateAntecedentesnutriDto): Promise<Antecedentesnutri>;
    findAll(): Promise<Antecedentesnutri[]>;
    findOne(id: number): Promise<Antecedentesnutri>;
    update(id: number, updateAntecedentesnutriDto: CreateAntecedentesnutriDto): Promise<Antecedentesnutri>;
    remove(id: number): Promise<void>;
}
