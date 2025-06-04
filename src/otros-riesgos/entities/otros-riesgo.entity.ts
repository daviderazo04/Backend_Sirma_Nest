import { Enfermeria } from "src/enfermeria/entities/enfermeria.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("OTROSRIESGOS", { schema: "Sirma" })
export class Otrosriesgos {
  @Column("int", { primary: true, name: "IDENFERMERIA" })
  idenfermeria: number;

  @Column("smallint", { name: "OR_GRUPOEDAD", nullable: true })
  orGrupoedad: number | null;

  @Column("smallint", { name: "OR_VIVECON", nullable: true })
  orVivecon: number | null;

  @Column("smallint", { name: "OR_MOVILIDAD", nullable: true })
  orMovilidad: number | null;

  @Column("smallint", { name: "OR_ENFERMEDADAGUDA", nullable: true })
  orEnfermedadaguda: number | null;

  @Column("smallint", { name: "OR_NEUROPSICO", nullable: true })
  orNeuropsico: number | null;

  @Column("smallint", { name: "OR_TOTAL", nullable: true })
  orTotal: number | null;

  @OneToOne(() => Enfermeria, (enfermeria) => enfermeria.otrosriesgos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDENFERMERIA", referencedColumnName: "idenfermeria" }])
  idenfermeria2: Enfermeria;
}
