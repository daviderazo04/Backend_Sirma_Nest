import { Repository } from 'typeorm';
import { CreateZonadolorDto } from './dto/create-zonadolor.dto';
import { UpdateZonadolorDto } from './dto/update-zonadolor.dto';
import { Zonadolor } from './entities/zonadolor.entity';
export declare class ZonadolorService {
    private zonadolorRepository;
    constructor(zonadolorRepository: Repository<Zonadolor>);
    create(createZonadolorDto: CreateZonadolorDto): Promise<Zonadolor>;
    findAll(): Promise<Zonadolor[]>;
    findOne(id: number): Promise<Zonadolor>;
    update(id: number, updateZonadolorDto: UpdateZonadolorDto): Promise<Zonadolor>;
    remove(id: number): Promise<void>;
}
