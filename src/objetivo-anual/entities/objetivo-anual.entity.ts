import { ObjetivoTrimestral } from 'src/objetivo-trimestral/entities/objetivo-trimestral.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class ObjetivoAnual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(
    () => ObjetivoTrimestral,
    (objetivoTrimestral) => objetivoTrimestral.objetivonual,
  )
  objetivosTrimestrais: ObjetivoTrimestral[];
}
