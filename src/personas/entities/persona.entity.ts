import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PERSONA')
export class Persona {
  @PrimaryGeneratedColumn({ name: 'IDPERSONA' })
  id: number;

  @Column({ name: 'PER_COMUNIDAD', type: 'varchar', length: 10, nullable: true, comment: 'Comunidad a la que pertenece' })
  comunidad: string;

  @Column({ name: 'PER_ZONA', type: 'smallint', nullable: true, comment: 'Zona dentro de la comunidad a la que pertenece' })
  zona: number;

  @Column({ name: 'PER_GEORREFERENCIACION', type: 'varchar', length: 200, nullable: true, comment: 'Georreferenciación del paciente' })
  georreferenciacion: string;

  @Column({ name: 'PER_PRIMERNOMBRE', type: 'varchar', length: 50, nullable: true, comment: 'Primer nombre del paciente' })
  primerNombre: string;

  @Column({ name: 'PER_SEGUNDONOMBRE', type: 'varchar', length: 50, nullable: true, comment: 'Segundo nombre del paciente' })
  segundoNombre: string;

  @Column({ name: 'PER_PRIMERAPELLIDO', type: 'varchar', length: 50, nullable: true })
  primerApellido: string;

  @Column({ name: 'PER_SEGUNDOAPELLIDO', type: 'varchar', length: 50, nullable: true })
  segundoApellido: string;

  @Column({ name: 'PER_CEDULA', type: 'varchar', length: 10, nullable: true, comment: 'Número de cédula del paciente' })
  cedula: string;

  @Column({ name: 'PER_FECHANACIMIENTO', type: 'date', nullable: true, comment: 'Fecha de nacimiento del paciente' })
  fechaNacimiento: Date;

  @Column({ name: 'PER_EDAD', type: 'smallint', nullable: true, comment: 'Edad del paciente' })
  edad: number;

  @Column({ name: 'PER_SEXO', type: 'varchar', length: 9, nullable: true, comment: 'Sexo del paciente' })
  sexo: string;

  @Column({ name: 'PER_ESTADOCIVIL', type: 'varchar', length: 11, nullable: true, comment: 'Estado civil del paciente' })
  estadoCivil: string;

  @Column({ name: 'PER_OCUPACION', type: 'varchar', length: 20, nullable: true, comment: 'Ocupación del paciente' })
  ocupacion: string;

  @Column({ name: 'PER_INSTRUCCION', type: 'varchar', length: 10, nullable: true, comment: 'Nivel de educación del paciente' })
  instruccion: string;

  @Column({ name: 'PER_CUIDADOR', type: 'varchar', length: 80, nullable: true, comment: 'Nombre y apellido del cuidador del paciente (si lo tiene)' })
  cuidador: string;

  @Column({ name: 'PER_PESO', type: 'decimal', precision: 5, scale: 2, nullable: true })
  peso: number;

  @Column({ name: 'PER_TALLA', type: 'decimal', precision: 3, scale: 2, nullable: true })
  talla: number;

  @Column({ name: 'PER_DISCAPACIDAD', type: 'boolean', nullable: true })
  discapacidad: boolean;
}
