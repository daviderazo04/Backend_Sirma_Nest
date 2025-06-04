import { Enfermeria } from "src/enfermeria/entities/enfermeria.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("COGNITIVO", { schema: "Sirma" })
export class Cognitivo {
  @Column("int", { primary: true, name: "IDENFERMERIA" })
  idenfermeria: number;

  @Column("smallint", { name: "COG_SABEFECHA", nullable: true })
  cogSabefecha: number | null;

  @Column("smallint", { name: "COG_APRENDETRES", nullable: true })
  cogAprendetres: number | null;

  @Column("smallint", { name: "COG_REPITEALREVES", nullable: true })
  cogRepitealreves: number | null;

  @Column("smallint", { name: "COG_TOMADOBLACOLOCA", nullable: true })
  cogTomadoblacoloca: number | null;

  @Column("smallint", { name: "COG_REPITEPALABRAS", nullable: true })
  cogRepitepalabras: number | null;

  @Column("smallint", { name: "COG_COPIACIRCULOS", nullable: true })
  cogCopiacirculos: number | null;

  @Column("smallint", { name: "COG_TOTAL", nullable: true })
  cogTotal: number | null;

  @OneToOne(() => Enfermeria, (enfermeria) => enfermeria.cognitivo, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDENFERMERIA", referencedColumnName: "idenfermeria" }])
  idenfermeria2: Enfermeria;
}
