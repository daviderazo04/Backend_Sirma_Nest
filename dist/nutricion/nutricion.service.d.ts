import { Repository } from 'typeorm';
import { Nutricion } from './entities/nutricion.entity';
import { CreateNutricionDto } from './dto/create-nutricion.dto';
import { UpdateNutricionDto } from './dto/update-nutricion.dto';
export declare class NutricionService {
    private nutricionRepository;
    constructor(nutricionRepository: Repository<Nutricion>);
    create(createNutricionDto: CreateNutricionDto): Promise<Nutricion>;
    findAll(): Promise<Nutricion[]>;
    findOne(id: number): Promise<Nutricion>;
    update(id: number, updateNutricionDto: UpdateNutricionDto): Promise<Nutricion>;
    remove(id: number): Promise<void>;
    obtenerNutricionCompleta(idNutricion: number): Promise<any>;
}
