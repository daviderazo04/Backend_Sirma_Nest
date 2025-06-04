import { Medicina } from "src/medicina/entities/medicina.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("GENERAL", { schema: "Sirma" })
export class General {
  @Column("int", { primary: true, name: "IDMEDICINA" })
  idmedicina: number;

  @Column("tinyint", { name: "GEN_VACUNASCOMPLETAS", nullable: true, width: 1 })
  genVacunascompletas: boolean | null;

  @Column("tinyint", { name: "GEN_HIGIENECUERPO", nullable: true, width: 1 })
  genHigienecuerpo: boolean | null;

  @Column("tinyint", { name: "GEN_CONTROLSALUD", nullable: true, width: 1 })
  genControlsalud: boolean | null;

  @Column("tinyint", { name: "GEN_HIGIENEORAL", nullable: true, width: 1 })
  genHigieneoral: boolean | null;

  @Column("tinyint", { name: "GEN_ACTRECREATIVA", nullable: true, width: 1 })
  genActrecreativa: boolean | null;

  @Column("tinyint", { name: "GEN_OTROSSALUDABLES", nullable: true, width: 1 })
  genOtrossaludables: boolean | null;

  @Column("text", { name: "GEN_OBSERVACIONES", nullable: true })
  genObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.general, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDMEDICINA", referencedColumnName: "idmedicina" }])
  idmedicina2: Medicina;
}
