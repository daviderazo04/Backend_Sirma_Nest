import { CreateResumenNutricionalDto } from './dto/create-resumen-nutricional.dto';
import { UpdateResumenNutricionalDto } from './dto/update-resumen-nutricional.dto';
export declare class ResumenNutricionalService {
    create(createResumenNutricionalDto: CreateResumenNutricionalDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResumenNutricionalDto: UpdateResumenNutricionalDto): string;
    remove(id: number): string;
}
