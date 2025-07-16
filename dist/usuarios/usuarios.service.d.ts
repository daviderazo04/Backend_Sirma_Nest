import { Repository } from 'typeorm';
import { Usuarios } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
export declare class UsuariosService {
    private usuariosRepository;
    constructor(usuariosRepository: Repository<Usuarios>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuarios>;
    findAll(): Promise<Usuarios[]>;
    findOne(idusuario: number): Promise<Usuarios | null>;
    update(idusuario: number, updateDto: Partial<CreateUsuarioDto>): Promise<Usuarios>;
    remove(idusuario: number): Promise<void>;
    login(userCorreo: string, userClave: string): Promise<Usuarios | null>;
}
