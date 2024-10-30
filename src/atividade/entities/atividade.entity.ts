import { ObjetivoTrimestral } from 'src/objetivo-trimestral/entities/objetivo-trimestral.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Atividade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @ManyToOne(
    () => ObjetivoTrimestral,
    (objetivoTrimestral) => objetivoTrimestral.atividades,
  )
  objetivoTrimestral: ObjetivoTrimestral;
}
