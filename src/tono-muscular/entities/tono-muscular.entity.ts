import { Fisioterapia } from "src/fisioterapia/entities/fisioterapia.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("TONOMUSCULAR", { schema: "Sirma" })
export class Tonomuscular {
  @Column("int", { primary: true, name: "IDFISIOTERAPIA" })
  idfisioterapia: number;

  @Column("smallint", { name: "MUS_ASHWORTH", nullable: true })
  musAshworth: number | null;

  @Column("smallint", { name: "MUS_CAMPBELL", nullable: true })
  musCampbell: number | null;

  @Column("text", { name: "MUS_OBSERVACIONES", nullable: true })
  musObservaciones: string | null;

  @OneToOne(() => Fisioterapia, (fisioterapia) => fisioterapia.tonomuscular, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "IDFISIOTERAPIA", referencedColumnName: "idfisioterapia" },
  ])
  idfisioterapia2: Fisioterapia;
}
