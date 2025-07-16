import { NutricionService } from './nutricion.service';
import { CreateNutricionDto } from './dto/create-nutricion.dto';
import { UpdateNutricionDto } from './dto/update-nutricion.dto';
import { Nutricion } from './entities/nutricion.entity';
export declare class NutricionController {
    private readonly nutricionService;
    constructor(nutricionService: NutricionService);
    create(createNutricionDto: CreateNutricionDto): Promise<Nutricion>;
    findAll(): Promise<Nutricion[]>;
    findOne(id: string): Promise<Nutricion>;
    getNutricionCompleta(idNutricion: string): Promise<any>;
    update(id: string, updateNutricionDto: UpdateNutricionDto): Promise<Nutricion>;
    remove(id: string): Promise<void>;
}
