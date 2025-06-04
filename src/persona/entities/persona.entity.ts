import { PersonaFicha } from "src/persona-ficha/entities/persona-ficha.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("PERSONA", { schema: "Sirma" })
export class Persona {
  @PrimaryGeneratedColumn({ type: "int", name: "IDPERSONA" })
  idpersona: number;

  @Column("varchar", {
    name: "PER_COMUNIDAD",
    nullable: true,
    comment: "Comunidad a la que pertenece",
    length: 10,
  })
  perComunidad: string | null;

  @Column("smallint", {
    name: "PER_ZONA",
    nullable: true,
    comment: "Zona dentro de la comunidad a la que pertenece",
  })
  perZona: number | null;

  @Column("varchar", {
    name: "PER_GEORREFERENCIACION",
    nullable: true,
    comment: "Georreferenciación del paciente",
    length: 200,
  })
  perGeorreferenciacion: string | null;

  @Column("varchar", {
    name: "PER_PRIMERNOMBRE",
    nullable: true,
    comment: "Primer nombre del paciente",
    length: 50,
  })
  perPrimernombre: string | null;

  @Column("varchar", {
    name: "PER_SEGUNDONOMBRE",
    nullable: true,
    comment: "Segundo nombre del paciente",
    length: 50,
  })
  perSegundonombre: string | null;

  @Column("varchar", { name: "PER_PRIMERAPELLIDO", nullable: true, length: 50 })
  perPrimerapellido: string | null;

  @Column("varchar", {
    name: "PER_SEGUNDOAPELLIDO",
    nullable: true,
    length: 50,
  })
  perSegundoapellido: string | null;

  @Column("varchar", {
    name: "PER_CEDULA",
    nullable: true,
    comment: "Número de cédula del paciente",
    length: 10,
  })
  perCedula: string | null;

  @Column("date", {
    name: "PER_FECHANACIMIENTO",
    nullable: true,
    comment: "Fecha de nacimiento del paciente",
  })
  perFechanacimiento: string | null;

  @Column("smallint", {
    name: "PER_EDAD",
    nullable: true,
    comment: "Edad del paciente",
  })
  perEdad: number | null;

  @Column("varchar", {
    name: "PER_SEXO",
    nullable: true,
    comment: "Sexo del paciente",
    length: 9,
  })
  perSexo: string | null;

  @Column("varchar", {
    name: "PER_ESTADOCIVIL",
    nullable: true,
    comment: "Estado civil del paciente",
    length: 11,
  })
  perEstadocivil: string | null;

  @Column("varchar", {
    name: "PER_OCUPACION",
    nullable: true,
    comment: "Ocupación del paciente",
    length: 20,
  })
  perOcupacion: string | null;

  @Column("varchar", {
    name: "PER_INSTRUCCION",
    nullable: true,
    comment: "Nivel de educación del paciente",
    length: 10,
  })
  perInstruccion: string | null;

  @Column("varchar", {
    name: "PER_CUIDADOR",
    nullable: true,
    comment: "Nombre y apellido del cuidador del paciente (si lo tiene)",
    length: 80,
  })
  perCuidador: string | null;

  @Column("decimal", {
    name: "PER_PESO",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  perPeso: string | null;

  @Column("decimal", {
    name: "PER_TALLA",
    nullable: true,
    precision: 3,
    scale: 2,
  })
  perTalla: string | null;

  @Column("tinyint", { name: "PER_DISCAPACIDAD", nullable: true })
  perDiscapacidad: number | null;

  @OneToMany(() => PersonaFicha, (personaFicha) => personaFicha.idpersona2)
  personaFichas: PersonaFicha[];
}
