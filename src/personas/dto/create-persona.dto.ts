export class CreatePersonaDto {
  comunidad?: string;
  zona?: number;
  georreferenciacion?: string;
  primerNombre?: string;
  segundoNombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  cedula?: string;
  fechaNacimiento?: Date;
  edad?: number;
  sexo?: string;
  estadoCivil?: string;
  ocupacion?: string;
  instruccion?: string;
  cuidador?: string;
  peso?: number;
  talla?: number;
  discapacidad?: boolean;
}
