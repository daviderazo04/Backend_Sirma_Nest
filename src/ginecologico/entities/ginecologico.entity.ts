import { Medicina } from "src/medicina/entities/medicina.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";


@Entity("GINECOLOGICO", { schema: "Sirma" })
export class Ginecologico {
  @Column("int", { primary: true, name: "IDMEDICINA" })
  idmedicina: number;

  @Column("smallint", { name: "GIN_EDADMENOPAUSIA", nullable: true })
  ginEdadmenopausia: number | null;

  @Column("smallint", { name: "GIN_EDADULTMAMOGRAFIA", nullable: true })
  ginEdadultmamografia: number | null;

  @Column("smallint", { name: "GIN_EDADULTCITOLOGIA", nullable: true })
  ginEdadultcitologia: number | null;

  @Column("smallint", { name: "GIN_CANTEMBARAZOS", nullable: true })
  ginCantembarazos: number | null;

  @Column("smallint", { name: "GIN_CANTPARTOS", nullable: true })
  ginCantpartos: number | null;

  @Column("smallint", { name: "GIN_CANTCESAREAS", nullable: true })
  ginCantcesareas: number | null;

  @Column("tinyint", { name: "GIN_TERAPIAHORMONAL", nullable: true, width: 1 })
  ginTerapiahormonal: boolean | null;

  @Column("text", { name: "GIN_OBSERVACIONES", nullable: true })
  ginObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.ginecologico, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDMEDICINA", referencedColumnName: "idmedicina" }])
  idmedicina2: Medicina;
}
