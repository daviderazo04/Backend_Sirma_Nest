import { HabitoService } from './habitos.service';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';
export declare class HabitosController {
    private readonly habitosService;
    constructor(habitosService: HabitoService);
    create(createHabitoDto: CreateHabitoDto): Promise<import("./entities/habito.entity").Habitos>;
    findAll(): Promise<import("./entities/habito.entity").Habitos[]>;
    findOne(id: string): Promise<import("./entities/habito.entity").Habitos>;
    update(id: string, updateHabitoDto: UpdateHabitoDto): Promise<import("./entities/habito.entity").Habitos>;
    remove(id: string): Promise<import("./entities/habito.entity").Habitos>;
}
