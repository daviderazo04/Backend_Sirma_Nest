import { AntecedentesfamiliaresService } from './antecedentes-familiares.service';
import { CreateAntecedentesFamiliareDto } from './dto/create-antecedentes-familiare.dto';
import { UpdateAntecedentesFamiliareDto } from './dto/update-antecedentes-familiare.dto';
export declare class AntecedentesFamiliaresController {
    private readonly antecedentesFamiliaresService;
    constructor(antecedentesFamiliaresService: AntecedentesfamiliaresService);
    create(createAntecedentesFamiliareDto: CreateAntecedentesFamiliareDto): Promise<import("./entities/antecedentes-familiare.entity").Antecedentesfamiliares>;
    findAll(): Promise<import("./entities/antecedentes-familiare.entity").Antecedentesfamiliares[]>;
    findOne(id: string): Promise<import("./entities/antecedentes-familiare.entity").Antecedentesfamiliares>;
    update(id: string, updateAntecedentesFamiliareDto: UpdateAntecedentesFamiliareDto): Promise<import("./entities/antecedentes-familiare.entity").Antecedentesfamiliares>;
    remove(id: string): Promise<import("./entities/antecedentes-familiare.entity").Antecedentesfamiliares>;
}
