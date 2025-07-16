import { SeguimientoFisioterapiaService } from './seguimiento-fisioterapia.service';
import { CreateSeguimientoFisioterapiaDto } from './dto/create-seguimiento-fisioterapia.dto';
import { UpdateSeguimientoFisioterapiaDto } from './dto/update-seguimiento-fisioterapia.dto';
export declare class SeguimientoFisioterapiaController {
    private readonly seguimientoFisioterapiaService;
    constructor(seguimientoFisioterapiaService: SeguimientoFisioterapiaService);
    create(createSeguimientoFisioterapiaDto: CreateSeguimientoFisioterapiaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSeguimientoFisioterapiaDto: UpdateSeguimientoFisioterapiaDto): string;
    remove(id: string): string;
}
