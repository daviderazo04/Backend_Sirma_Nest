import { Medicina } from "src/medicina/entities/medicina.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("EXAMENSISTEMICO", { schema: "Sirma" })
export class Examensistemico {
  @Column("int", { primary: true, name: "IDMEDICINA" })
  idmedicina: number;

  @Column("char", { name: "EXS_ORGSENTIDOS", nullable: true, length: 10 })
  exsOrgsentidos: string | null;

  @Column("char", { name: "EXS_RESPIRATORIO", nullable: true, length: 10 })
  exsRespiratorio: string | null;

  @Column("char", { name: "EXS_CARDIOVASCULAR", nullable: true, length: 10 })
  exsCardiovascular: string | null;

  @Column("char", { name: "EXS_DIGESTIVO", nullable: true, length: 10 })
  exsDigestivo: string | null;

  @Column("char", { name: "EXS_GENITOURINARIO", nullable: true, length: 10 })
  exsGenitourinario: string | null;

  @Column("char", {
    name: "EXS_MUSCULOESQUELETICO",
    nullable: true,
    length: 10,
  })
  exsMusculoesqueletico: string | null;

  @Column("char", { name: "EXS_ENDOCRINO", nullable: true, length: 10 })
  exsEndocrino: string | null;

  @Column("char", { name: "EXS_HEMOLINFATICO", nullable: true, length: 10 })
  exsHemolinfatico: string | null;

  @Column("char", { name: "EXS_NEUROLOGICO", nullable: true, length: 10 })
  exsNeurologico: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.examensistemico, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDMEDICINA", referencedColumnName: "idmedicina" }])
  idmedicina2: Medicina;
}
