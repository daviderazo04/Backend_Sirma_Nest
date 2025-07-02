import { Controller, Post, Body, UsePipes, ValidationPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { FichasGeneralCompletaService } from './fichas-general-completa.service';
import { CreateFichasGeneralCompletaDto } from './dto/create-fichas-general-completa.dto';

@Controller('fichas-general-completa')
export class FichasGeneralCompletaController {
  constructor(private readonly fichasGeneralCompletaService: FichasGeneralCompletaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async crearFicha(@Body() createFichaDto: CreateFichasGeneralCompletaDto) {
    return this.fichasGeneralCompletaService.crearFichaPersona(createFichaDto);
  }
}