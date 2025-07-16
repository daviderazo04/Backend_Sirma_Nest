import { Repository } from 'typeorm';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { Alerta } from './entities/alerta.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class AlertaService {
    private alertaRepository;
    private medicinaService;
    constructor(alertaRepository: Repository<Alerta>, medicinaService: MedicinaService);
    create(createAlertaDto: CreateAlertaDto): Promise<Alerta>;
    findAll(): Promise<Alerta[]>;
    findOne(id: number): Promise<Alerta>;
    update(id: number, updateAlertaDto: UpdateAlertaDto): Promise<Alerta>;
    remove(id: number): Promise<Alerta>;
}
