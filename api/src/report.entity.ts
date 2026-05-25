import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nama: string;

  @Column({ nullable: true })
  laporan: string;

  @Column({ nullable: true })
  lokasi: string;

  @Column({ nullable: true })
  kategori: string;

  @Column({ nullable: true })
  bukti: string;

  @Column({ default: 'pending' })
  status: string;
}