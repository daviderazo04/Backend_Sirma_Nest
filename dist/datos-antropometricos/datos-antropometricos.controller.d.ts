import { DatosantropometricosService } from './datos-antropometricos.service';
import { CreateDatosantropometricosDto } from './dto/create-datos-antropometrico.dto';
import { Datosantropometricos } from './entities/datos-antropometrico.entity';
export declare class DatosantropometricosController {
    private readonly datosantropometricosService;
    constructor(datosantropometricosService: DatosantropometricosService);
    create(createDatosantropometricosDto: CreateDatosantropometricosDto): Promise<Datosantropometricos>;
    findAll(): Promise<Datosantropometricos[]>;
    findOne(id: number): Promise<Datosantropometricos>;
    update(id: number, updateDatosantropometricosDto: CreateDatosantropometricosDto): Promise<Datosantropometricos>;
    remove(id: number): Promise<void>;
}
