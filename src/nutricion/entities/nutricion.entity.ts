import { Antecedentesnutri } from "src/antecedentes-nutri/entities/antecedentes-nutri.entity";
import { Cribaje } from "src/cribaje/entities/cribaje.entity";
import { Datosantropometricos } from "src/datos-antropometricos/entities/datos-antropometrico.entity";
import { Evaluacion } from "src/evaluacion/entities/evaluacion.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";


@Index("FK_NUTRICIO_PACIENTE__PACIENTE", ["idficha"], {})
@Entity("NUTRICION", { schema: "Sirma" })
export class Nutricion {
  @PrimaryGeneratedColumn({ type: "int", name: "IDNUTRICION" })
  idnutricion: number;

  @Column("varchar", { name: "IDFICHA", length: 6 })
  idficha: string;

  @Column("varchar", {
    name: "NUT_NOMBREENCUESTADOR",
    nullable: true,
    length: 50,
  })
  nutNombreencuestador: string | null;

  @Column("decimal", {
    name: "NUT_EVALGLOBAL",
    nullable: true,
    precision: 3,
    scale: 1,
  })
  nutEvalglobal: string | null;

  @Column("smallint", { name: "NUT_ESTADONUTRICIONAL", nullable: true })
  nutEstadonutricional: number | null;

  @OneToOne(
    () => Antecedentesnutri,
    (antecedentesnutri) => antecedentesnutri.idnutricion2
  )
  antecedentesnutri: Antecedentesnutri;

  @OneToOne(() => Cribaje, (cribaje) => cribaje.idnutricion2)
  cribaje: Cribaje;

  @OneToOne(
    () => Datosantropometricos,
    (datosantropometricos) => datosantropometricos.idnutricion2
  )
  datosantropometricos: Datosantropometricos;

  @OneToOne(() => Evaluacion, (evaluacion) => evaluacion.idnutricion2)
  evaluacion: Evaluacion;

  @ManyToOne(() => Paciente, (paciente) => paciente.nutricions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDFICHA", referencedColumnName: "idficha" }])
  idficha2: Paciente;
}
