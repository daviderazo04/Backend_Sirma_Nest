import { CribajeService } from './cribaje.service';
import { CreateCribajeDto } from './dto/create-cribaje.dto';
import { Cribaje } from './entities/cribaje.entity';
import { UpdateCribajeDto } from './dto/update-cribaje.dto';
export declare class CribajeController {
    private readonly cribajeService;
    constructor(cribajeService: CribajeService);
    create(createCribajeDto: CreateCribajeDto): Promise<Cribaje>;
    findAll(): Promise<Cribaje[]>;
    findOne(idnutricion: number): Promise<Cribaje>;
    update(idnutricion: number, updateCribajeDto: UpdateCribajeDto): Promise<Cribaje>;
    remove(idnutricion: number): Promise<void>;
}
