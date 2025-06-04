import { Medicina } from "src/medicina/entities/medicina.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
@Entity("FARMACOLOGICO", { schema: "Sirma" })
export class Farmacologico {
  @Column("int", { primary: true, name: "IDMEDICINA" })
  idmedicina: number;

  @Column("tinyint", { name: "FAR_AINES", nullable: true, width: 1 })
  farAines: boolean | null;

  @Column("tinyint", { name: "FAR_ANALGESICOS", nullable: true, width: 1 })
  farAnalgesicos: boolean | null;

  @Column("char", { name: "FAR_ANTIDIABETICOS", nullable: true, length: 10 })
  farAntidiabeticos: string | null;

  @Column("tinyint", {
    name: "FAR_ANTIHIPERTENSIVOS",
    nullable: true,
    width: 1,
  })
  farAntihipertensivos: boolean | null;

  @Column("tinyint", { name: "FAR_ANTICOAGULANTES", nullable: true, width: 1 })
  farAnticoagulantes: boolean | null;

  @Column("tinyint", { name: "FAR_PSICOFARMACOS", nullable: true, width: 1 })
  farPsicofarmacos: boolean | null;

  @Column("tinyint", { name: "FAR_ANTIBIOTICOS", nullable: true, width: 1 })
  farAntibioticos: boolean | null;

  @Column("tinyint", { name: "FAR_ALERGIAS", nullable: true, width: 1 })
  farAlergias: boolean | null;

  @Column("tinyint", { name: "FAR_EFECTOSADVERSOS", nullable: true, width: 1 })
  farEfectosadversos: boolean | null;

  @Column("tinyint", { name: "FAR_POLIPRESCRIPTOR", nullable: true, width: 1 })
  farPoliprescriptor: boolean | null;

  @Column("tinyint", { name: "FAR_POLIFARMACIA", nullable: true, width: 1 })
  farPolifarmacia: boolean | null;

  @Column("tinyint", { name: "FAR_OTROS", nullable: true, width: 1 })
  farOtros: boolean | null;

  @Column("text", { name: "FAR_OBSERVACIONES", nullable: true })
  farObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.farmacologico, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDMEDICINA", referencedColumnName: "idmedicina" }])
  idmedicina2: Medicina;
}
