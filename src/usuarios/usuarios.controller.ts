import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuarios } from './entities/usuario.entity';

@Controller('api/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Registro/creación de usuario simplificado
  @Post()
  async create(@Body() dto: CreateUsuarioDto): Promise<Usuarios> {
    return this.usuariosService.create(dto);
  }

  @Get()
  async findAll(): Promise<Usuarios[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuarios | null> {
    return this.usuariosService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<CreateUsuarioDto>,
  ): Promise<Usuarios> {
    return this.usuariosService.update(Number(id), updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.usuariosService.remove(Number(id));
    return { message: 'Usuario marcado como inactivo correctamente' };
  }

  @Post('login')
  async login(
    @Body('userCorreo') userCorreo: string,
    @Body('userClave') userClave: string,
  ) {
    const usuario = await this.usuariosService.login(userCorreo, userClave);
    if (!usuario) {
      throw new HttpException(
        { message: 'Credenciales incorrectas o usuario inactivo' },
        HttpStatus.UNAUTHORIZED,
      );
    }
    return usuario;
  }
}
