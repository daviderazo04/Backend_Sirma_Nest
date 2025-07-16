import { CreateSeguimientoSaludDto } from './dto/create-seguimiento-salud.dto';
import { UpdateSeguimientoSaludDto } from './dto/update-seguimiento-salud.dto';
export declare class SeguimientoSaludService {
    create(createSeguimientoSaludDto: CreateSeguimientoSaludDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSeguimientoSaludDto: UpdateSeguimientoSaludDto): string;
    remove(id: number): string;
}
