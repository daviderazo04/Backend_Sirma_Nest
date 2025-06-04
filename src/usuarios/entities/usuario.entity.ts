import { Column, Entity } from "typeorm";

@Entity("USUARIOS", { schema: "Sirma" })
export class Usuarios {
  @Column("varchar", { primary: true, name: "IDUSUARIO", length: 25 })
  idusuario: string;

  @Column("varchar", { name: "USER_NOMBRE", nullable: true, length: 30 })
  userNombre: string | null;

  @Column("varchar", { name: "USER_APELLIDO", nullable: true, length: 30 })
  userApellido: string | null;

  @Column("varchar", { name: "USER_CORREO", nullable: true, length: 80 })
  userCorreo: string | null;

  @Column("varchar", { name: "USER_CLAVE", nullable: true, length: 30 })
  userClave: string | null;

  @Column("varchar", { name: "USER_CEDULA", nullable: true, length: 10 })
  userCedula: string | null;

  @Column("varchar", { name: "USER_ROL", nullable: true, length: 15 })
  userRol: string | null;

  @Column("varchar", { name: "USER_ESTADO", nullable: true, length: 8 })
  userEstado: string | null;
}
