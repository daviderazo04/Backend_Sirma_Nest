import { CreateDatosGeneraleDto } from './dto/create-datos-generale.dto';
import { UpdateDatosGeneraleDto } from './dto/update-datos-generale.dto';
import { Datosgenerales } from './entities/datos-generale.entity';
import { Repository } from 'typeorm';
export declare class DatosGeneralesService {
    private datosGeneralesRepository;
    constructor(datosGeneralesRepository: Repository<Datosgenerales>);
    create(dto: CreateDatosGeneraleDto): Promise<Datosgenerales>;
    findAll(): Promise<Datosgenerales[]>;
    findOne(id: number): Promise<Datosgenerales>;
    update(id: number, updateDatosGeneraleDto: UpdateDatosGeneraleDto): Promise<Datosgenerales>;
    remove(id: number): Promise<void>;
}
