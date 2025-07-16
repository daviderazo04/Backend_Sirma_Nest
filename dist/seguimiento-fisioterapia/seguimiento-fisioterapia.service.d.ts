import { CreateSeguimientoFisioterapiaDto } from './dto/create-seguimiento-fisioterapia.dto';
import { UpdateSeguimientoFisioterapiaDto } from './dto/update-seguimiento-fisioterapia.dto';
export declare class SeguimientoFisioterapiaService {
    create(createSeguimientoFisioterapiaDto: CreateSeguimientoFisioterapiaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSeguimientoFisioterapiaDto: UpdateSeguimientoFisioterapiaDto): string;
    remove(id: number): string;
}
