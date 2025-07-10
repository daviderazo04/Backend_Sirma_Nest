import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'calificaciones_ai' })
export class SatisfaccionInteligenciaArtificial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint' })
  calificacion: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}