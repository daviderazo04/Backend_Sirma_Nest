import { Repository } from 'typeorm';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
import { Datosantropometricos } from './entities/datos-antropometrico.entity';
import { CreateDatosantropometricosDto } from './dto/create-datos-antropometrico.dto';
export declare class DatosantropometricosService {
    private readonly datosantropometricosRepository;
    private readonly nutricionRepository;
    constructor(datosantropometricosRepository: Repository<Datosantropometricos>, nutricionRepository: Repository<Nutricion>);
    create(createDatosantropometricosDto: CreateDatosantropometricosDto): Promise<Datosantropometricos>;
    findAll(): Promise<Datosantropometricos[]>;
    findOne(id: number): Promise<Datosantropometricos>;
    update(id: number, updateDatosantropometricosDto: CreateDatosantropometricosDto): Promise<Datosantropometricos>;
    remove(id: number): Promise<{
        affected?: number;
    }>;
}
