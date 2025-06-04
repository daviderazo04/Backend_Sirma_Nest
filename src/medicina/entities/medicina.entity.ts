import { Alerta } from "src/alerta/entities/alerta.entity";
import { Andrologico } from "src/andrologico/entities/andrologico.entity";
import { Antecedentesfamiliares } from "src/antecedentes-familiares/entities/antecedentes-familiare.entity";
import { Diagnostico } from "src/diagnostico/entities/diagnostico.entity";
import { Examenregional } from "src/examen-regional/entities/examen-regional.entity";
import { Examensistemico } from "src/examen-sistemico/entities/examen-sistemico.entity";
import { Farmacologico } from "src/farmacologico/entities/farmacologico.entity";
import { General } from "src/general/entities/general.entity";

import { Ginecologico } from "src/ginecologico/entities/ginecologico.entity";
import { Habitos } from "src/habitos/entities/habito.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";
import { Patologico } from "src/patologico/entities/patologico.entity";
import { Revisionactual } from "src/revision-actual/entities/revision-actual.entity";
import { Sindromesgeriatricos } from "src/sindromes-geriatricos/entities/sindromes-geriatrico.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";


@Index("FK_MEDICINA_PACIENTE__PACIENTE", ["idficha"], {})
@Entity("MEDICINA", { schema: "Sirma" })
export class Medicina {
  @PrimaryGeneratedColumn({ type: "int", name: "IDMEDICINA" })
  idmedicina: number;

  @Column("varchar", { name: "IDFICHA", length: 6 })
  idficha: string;

  @Column("varchar", {
    name: "MED_NOMBREENCUESTADOR",
    nullable: true,
    length: 50,
  })
  medNombreencuestador: string | null;

  @Column("text", { name: "MED_ANAMNESIS", nullable: true })
  medAnamnesis: string | null;

  @Column("text", { name: "MED_OBSERVACIONESREVACT", nullable: true })
  medObservacionesrevact: string | null;

  @Column("text", { name: "MED_OBSERVACIONEXAMENES", nullable: true })
  medObservacionexamenes: string | null;

  @Column("text", { name: "MED_PLANINTEGRAL", nullable: true })
  medPlanintegral: string | null;

  @OneToOne(() => Alerta, (alerta) => alerta.idmedicina2)
  alerta: Alerta;

  @OneToOne(() => Andrologico, (andrologico) => andrologico.idmedicina2)
  andrologico: Andrologico;

  @OneToOne(
    () => Antecedentesfamiliares,
    (antecedentesfamiliares) => antecedentesfamiliares.idmedicina2
  )
  antecedentesfamiliares: Antecedentesfamiliares;

  @OneToOne(() => Diagnostico, (diagnostico) => diagnostico.idmedicina2)
  diagnostico: Diagnostico;

  @OneToOne(
    () => Examenregional,
    (examenregional) => examenregional.idmedicina2
  )
  examenregional: Examenregional;

  @OneToOne(
    () => Examensistemico,
    (examensistemico) => examensistemico.idmedicina2
  )
  examensistemico: Examensistemico;

  @OneToOne(() => Farmacologico, (farmacologico) => farmacologico.idmedicina2)
  farmacologico: Farmacologico;

  @OneToOne(() => General, (general) => general.idmedicina2)
  general: General;

  @OneToOne(() => Ginecologico, (ginecologico) => ginecologico.idmedicina2)
  ginecologico: Ginecologico;

  @OneToOne(
    () => Habitos,
    (habitosnocivos) => habitosnocivos.idmedicina2
  )
  habitosnocivos: Habitos;

  @ManyToOne(() => Paciente, (paciente) => paciente.medicinas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDFICHA", referencedColumnName: "idficha" }])
  idficha2: Paciente;

  @OneToOne(() => Patologico, (patologico) => patologico.idmedicina2)
  patologico: Patologico;

  @OneToOne(
    () => Revisionactual,
    (revisionactual) => revisionactual.idmedicina2
  )
  revisionactual: Revisionactual;

  @OneToOne(
    () => Sindromesgeriatricos,
    (sindromesgeriatricos) => sindromesgeriatricos.idmedicina2
  )
  sindromesgeriatricos: Sindromesgeriatricos;
}
