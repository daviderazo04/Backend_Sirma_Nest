import { Medicina } from "src/medicina/entities/medicina.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("HABITOSNOCIVOS", { schema: "Sirma" })
export class Habitos {
  @Column("int", { primary: true, name: "IDMEDICINA" })
  idmedicina: number;

  @Column("tinyint", { name: "NOC_TABAQUISMO", nullable: true, width: 1 })
  nocTabaquismo: boolean | null;

  @Column("tinyint", { name: "NOC_ALCOHOLISMO", nullable: true, width: 1 })
  nocAlcoholismo: boolean | null;

  @Column("tinyint", { name: "NOC_ADICCIONES", nullable: true, width: 1 })
  nocAdicciones: boolean | null;

  @Column("tinyint", { name: "NOC_OTROS", nullable: true, width: 1 })
  nocOtros: boolean | null;

  @Column("text", { name: "NOC_OBSERVACIONES", nullable: true })
  nocObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.habitosnocivos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDMEDICINA", referencedColumnName: "idmedicina" }])
  idmedicina2: Medicina;
}
