import { FisioterapiaService } from './fisioterapia.service';
import { CreateFisioterapiaDto } from './dto/create-fisioterapia.dto';
import { UpdateFisioterapiaDto } from './dto/update-fisioterapia.dto';
export declare class FisioterapiaController {
    private readonly fisioterapiaService;
    constructor(fisioterapiaService: FisioterapiaService);
    create(createFisioterapiaDto: CreateFisioterapiaDto): Promise<import("./entities/fisioterapia.entity").Fisioterapia>;
    findAll(): Promise<import("./entities/fisioterapia.entity").Fisioterapia[]>;
    findOne(id: string): Promise<import("./entities/fisioterapia.entity").Fisioterapia>;
    getFisioterapiaCompleta(idFisioterapia: string): Promise<any>;
    update(id: string, updateFisioterapiaDto: UpdateFisioterapiaDto): Promise<import("./entities/fisioterapia.entity").Fisioterapia>;
    remove(id: string): Promise<import("./entities/fisioterapia.entity").Fisioterapia>;
}
