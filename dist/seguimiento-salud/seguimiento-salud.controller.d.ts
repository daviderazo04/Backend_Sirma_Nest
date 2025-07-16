import { SeguimientoSaludService } from './seguimiento-salud.service';
import { CreateSeguimientoSaludDto } from './dto/create-seguimiento-salud.dto';
import { UpdateSeguimientoSaludDto } from './dto/update-seguimiento-salud.dto';
export declare class SeguimientoSaludController {
    private readonly seguimientoSaludService;
    constructor(seguimientoSaludService: SeguimientoSaludService);
    create(createSeguimientoSaludDto: CreateSeguimientoSaludDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSeguimientoSaludDto: UpdateSeguimientoSaludDto): string;
    remove(id: string): string;
}
