import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuarios } from './entities/usuario.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(dto: CreateUsuarioDto): Promise<Usuarios>;
    findAll(): Promise<Usuarios[]>;
    findOne(id: string): Promise<Usuarios | null>;
    update(id: string, updateDto: Partial<CreateUsuarioDto>): Promise<Usuarios>;
    remove(id: string): Promise<{
        message: string;
    }>;
    login(userCorreo: string, userClave: string): Promise<Usuarios>;
}
