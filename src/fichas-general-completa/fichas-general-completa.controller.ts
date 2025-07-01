import { Controller, Post, Body, UsePipes, ValidationPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { FichasGeneralCompletaService } from './fichas-general-completa.service';
import { CreateFichasGeneralCompletaDto } from './dto/create-fichas-general-completa.dto';

@Controller('fichas-general-completa') // Define el prefijo de la ruta REST, e.g., /fichas-general-completa
export class FichasGeneralCompletaController {
  constructor(private readonly fichasGeneralCompletaService: FichasGeneralCompletaService) {}

  @Post() // Maneja las peticiones POST a la ruta base /fichas-general-completa
  @HttpCode(HttpStatus.CREATED) // Devuelve un código 201 Created si la operación es exitosa
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) // Valida el DTO de entrada
  async crearFicha(@Body() createFichaDto: CreateFichasGeneralCompletaDto) {
    return this.fichasGeneralCompletaService.crearFichaPersona(createFichaDto);
  }
}