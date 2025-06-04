import { Paciente } from "src/paciente/entities/paciente.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("FK_SEGUISALUD_RELATIONS_PACIENTE", ["idficha"], {})
@Entity("SEGUIMIENTOSALUD", { schema: "Sirma" })
export class Seguimientosalud {
  @PrimaryGeneratedColumn({ type: "int", name: "IDSEGUIMIENTOSALUD" })
  idseguimientosalud: number;

  @Column("varchar", { name: "IDFICHA", nullable: true, length: 6 })
  idficha: string | null;

  @Column("varchar", {
    name: "SS_NOMBREENCUESTADOR",
    nullable: true,
    length: 50,
  })
  ssNombreencuestador: string | null;

  @Column("date", { name: "SS_FECHAEVOLUCION", nullable: true })
  ssFechaevolucion: string | null;

  @Column("time", { name: "SS_HORAEVOLUCION", nullable: true })
  ssHoraevolucion: string | null;

  @Column("text", { name: "SS_NOTAS", nullable: true })
  ssNotas: string | null;

  @Column("text", { name: "SS_INDICANOFARMA", nullable: true })
  ssIndicanofarma: string | null;

  @Column("text", { name: "SS_INDICAFARMA", nullable: true })
  ssIndicafarma: string | null;

  @ManyToOne(() => Paciente, (paciente) => paciente.seguimientosaluds, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDFICHA", referencedColumnName: "idficha" }])
  idficha2: Paciente;
}
