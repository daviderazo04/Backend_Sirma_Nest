import { Fisioterapia } from 'src/fisioterapia/entities/fisioterapia.entity';
import { Zonadolor } from 'src/zonadolor/entities/zonadolor.entity';
export declare class Dolorfisio {
    iddolorfisio: number;
    idzona: number | null;
    idfisioterapia: number | null;
    zonaDuele: boolean | null;
    idfisioterapia2: Fisioterapia;
    idzona2: Zonadolor;
}
