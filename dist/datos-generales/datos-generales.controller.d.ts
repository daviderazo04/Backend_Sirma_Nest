import { DatosGeneralesService } from './datos-generales.service';
import { CreateDatosGeneraleDto } from './dto/create-datos-generale.dto';
import { UpdateDatosGeneraleDto } from './dto/update-datos-generale.dto';
export declare class DatosGeneralesController {
    private readonly datosGeneralesService;
    constructor(datosGeneralesService: DatosGeneralesService);
    create(createDatosGeneraleDto: CreateDatosGeneraleDto): Promise<import("./entities/datos-generale.entity").Datosgenerales>;
    findAll(): Promise<import("./entities/datos-generale.entity").Datosgenerales[]>;
    findOne(id: string): Promise<import("./entities/datos-generale.entity").Datosgenerales>;
    update(id: string, updateDatosGeneraleDto: UpdateDatosGeneraleDto): Promise<import("./entities/datos-generale.entity").Datosgenerales>;
    remove(id: string): Promise<void>;
}
