import { OtrosRiesgosService } from './otros-riesgos.service';
import { CreateOtrosRiesgoDto } from './dto/create-otros-riesgo.dto';
import { UpdateOtrosRiesgoDto } from './dto/update-otros-riesgo.dto';
export declare class OtrosRiesgosController {
    private readonly otrosRiesgosService;
    constructor(otrosRiesgosService: OtrosRiesgosService);
    create(createOtrosRiesgoDto: CreateOtrosRiesgoDto): Promise<import("./entities/otros-riesgo.entity").Otrosriesgos>;
    findAll(): Promise<import("./entities/otros-riesgo.entity").Otrosriesgos[]>;
    findOne(id: number): Promise<import("./entities/otros-riesgo.entity").Otrosriesgos>;
    update(id: number, updateOtrosRiesgoDto: UpdateOtrosRiesgoDto): Promise<import("./entities/otros-riesgo.entity").Otrosriesgos>;
    remove(id: number): Promise<import("./entities/otros-riesgo.entity").Otrosriesgos>;
}
