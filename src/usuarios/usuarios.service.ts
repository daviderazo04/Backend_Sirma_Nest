import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
  ) {}

  async create(
    createUsuarioDto: CreateUsuarioDto,
    creador?: Usuarios | null,
  ): Promise<Usuarios> {
    // Estado activo por defecto
    const usuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      userEstado: 'activo',
    });

    return this.usuariosRepository.save(usuario);
  }

  async findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  async findOne(idusuario: number): Promise<Usuarios | null> {
    return this.usuariosRepository.findOneBy({ idusuario });
  }

  async update(
    idusuario: number,
    updateDto: Partial<CreateUsuarioDto>,
    modificador: Usuarios | null,
  ): Promise<Usuarios> {
    const usuario = await this.usuariosRepository.findOneBy({ idusuario });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    Object.assign(usuario, updateDto);
    return this.usuariosRepository.save(usuario);
  }

  // Borrado lógico: cambia el estado a "inactivo"
  async remove(idusuario: number, eliminador: Usuarios | null): Promise<void> {
    const usuario = await this.usuariosRepository.findOneBy({ idusuario });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    if (!eliminador || eliminador.userRol !== 'admin') {
      throw new ForbiddenException(
        'Solo un administrador puede eliminar usuarios',
      );
    }

    usuario.userEstado = 'inactivo';
    await this.usuariosRepository.save(usuario);
  }

  async login(userCorreo: string, userClave: string): Promise<Usuarios | null> {
    return this.usuariosRepository.findOneBy({
      userCorreo,
      userClave,
      userEstado: 'activo',
    });
  }
}
