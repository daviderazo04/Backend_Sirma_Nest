import { Medicina } from "src/medicina/entities/medicina.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("ANDROLOGICO", { schema: "Sirma" })
export class Andrologico {
  @Column("int", { primary: true, name: "IDMEDICINA" })
  idmedicina: number;

  @Column("smallint", { name: "AND_EDADULTANTIGENO", nullable: true })
  andEdadultantigeno: number | null;

  @Column("tinyint", { name: "AND_TERAPIAHORMONAL", nullable: true, width: 1 })
  andTerapiahormonal: boolean | null;

  @Column("text", { name: "AND_OBSERVACIONES", nullable: true })
  andObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.andrologico, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDMEDICINA", referencedColumnName: "idmedicina" }])
  idmedicina2: Medicina;
}
