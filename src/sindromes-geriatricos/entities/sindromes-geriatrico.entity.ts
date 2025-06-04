import { Medicina } from "src/medicina/entities/medicina.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("SINDROMESGERIATRICOS", { schema: "Sirma" })
export class Sindromesgeriatricos {
  @Column("int", { primary: true, name: "IDMEDICINA" })
  idmedicina: number;

  @Column("tinyint", { name: "SG_FRAGILIDAD", nullable: true, width: 1 })
  sgFragilidad: boolean | null;

  @Column("tinyint", { name: "SG_DISMOVILIDAD", nullable: true, width: 1 })
  sgDismovilidad: boolean | null;

  @Column("tinyint", { name: "SG_DEPRESION", nullable: true, width: 1 })
  sgDepresion: boolean | null;

  @Column("tinyint", { name: "SG_CAIDA", nullable: true, width: 1 })
  sgCaida: boolean | null;

  @Column("tinyint", { name: "SG_DELIRIO", nullable: true, width: 1 })
  sgDelirio: boolean | null;

  @Column("tinyint", { name: "SG_MALNUTRICION", nullable: true, width: 1 })
  sgMalnutricion: boolean | null;

  @Column("tinyint", { name: "SG_ULCERASPRESION", nullable: true, width: 1 })
  sgUlceraspresion: boolean | null;

  @Column("tinyint", { name: "SG_DEMENCIA", nullable: true, width: 1 })
  sgDemencia: boolean | null;

  @Column("tinyint", { name: "SG_INCONTINENCIA", nullable: true, width: 1 })
  sgIncontinencia: boolean | null;

  @Column("tinyint", { name: "SG_IATROGENIA", nullable: true, width: 1 })
  sgIatrogenia: boolean | null;

  @OneToOne(() => Medicina, (medicina) => medicina.sindromesgeriatricos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDMEDICINA", referencedColumnName: "idmedicina" }])
  idmedicina2: Medicina;
}
