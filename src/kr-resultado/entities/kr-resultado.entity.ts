import { ObjetivoTrimestral } from 'src/objetivo-trimestral/entities/objetivo-trimestral.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class KrResultado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(
    () => ObjetivoTrimestral,
    (objetivoTrimestral) => objetivoTrimestral.krResultados,
  )
  objetivoTrimestral: ObjetivoTrimestral;
}
