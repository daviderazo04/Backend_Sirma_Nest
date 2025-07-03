import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateNutricionCompletoDto {
  // Datos nutricion
  @IsString()
  idFicha: string;

  @IsString()
  nombreEncuestador: string;

  @IsNumber()
  evalGlobal: number;

  @IsNumber()
  estadoNutricional: number;

  // Cribaje
  @IsNumber()
  perdidaApetito: number;

  @IsNumber()
  perdidaPeso: number;

  @IsNumber()
  movilidad: number;

  @IsNumber()
  enfermedadAguda: number;

  @IsNumber()
  neuropsico: number;

  @IsNumber()
  imc: number;

  @IsNumber()
  totales: number;

  // Evaluacion
  @IsNumber()
  viveDomicilio: number;

  @IsNumber()
  masTresMedicinas: number;

  @IsNumber()
  ulceraLesionCutanea: number;

  @IsNumber()
  comidaCompleta: number;

  @IsNumber()
  consumePaciente: number;

  @IsNumber()
  frutaVerdura: number;

  @IsNumber()
  vasosAgua: number;

  @IsNumber()
  formaAlimento: number;

  @IsNumber()
  bienNutrido: number;

  @IsNumber()
  estadoSalud: number;

  @IsNumber()
  circunBraquial: number;

  @IsNumber()
  circunPantorrilla: number;

  @IsNumber()
  evaTotal: number;

  // AntecedentesNutri
  @IsBoolean()
  dietaBalanceada: boolean;

  @IsBoolean()
  dentalesCompletas: boolean;

  @IsBoolean()
  dificultadMasticar: boolean;

  @IsBoolean()
  estrenimientoFrecu: boolean;

  @IsBoolean()
  diarreaFrecu: boolean;

  @IsBoolean()
  alergiaAlimentaria: boolean;

  @IsString()
  desayuno: string;

  @IsString()
  almuerzo: string;

  @IsString()
  cena: string;

  @IsString()
  snacks: string;

  @IsString()
  preferencias: string;

  @IsString()
  quienCocina: string;

  // Datos Antropometricos
  @IsNumber()
  imcDA: number;

  @IsNumber()
  cintura: number;

  @IsNumber()
  cadera: number;

  @IsNumber()
  pantorrilla: number;

  @IsNumber()
  brazo: number;
}
