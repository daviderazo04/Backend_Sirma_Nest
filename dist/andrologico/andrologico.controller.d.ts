import { AndrologicoService } from './andrologico.service';
import { CreateAndrologicoDto } from './dto/create-andrologico.dto';
import { UpdateAndrologicoDto } from './dto/update-andrologico.dto';
export declare class AndrologicoController {
    private readonly andrologicoService;
    constructor(andrologicoService: AndrologicoService);
    create(createAndrologicoDto: CreateAndrologicoDto): Promise<import("./entities/andrologico.entity").Andrologico>;
    findAll(): Promise<import("./entities/andrologico.entity").Andrologico[]>;
    findOne(id: string): Promise<import("./entities/andrologico.entity").Andrologico>;
    update(id: string, updateAndrologicoDto: UpdateAndrologicoDto): Promise<import("./entities/andrologico.entity").Andrologico>;
    remove(id: string): Promise<import("./entities/andrologico.entity").Andrologico>;
}
