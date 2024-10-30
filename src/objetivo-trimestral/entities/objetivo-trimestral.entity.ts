import { Atividade } from 'src/atividade/entities/atividade.entity';
import { KrResultado } from 'src/kr-resultado/entities/kr-resultado.entity';
import { ObjetivoAnual } from 'src/objetivo-anual/entities/objetivo-anual.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class ObjetivoTrimestral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(
    () => ObjetivoAnual,
    (objetivoAnual) => objetivoAnual.objetivosTrimestrais,
  )
  objetivoAnual: ObjetivoAnual;

  @OneToMany(() => KrResultado, (krResultado) => krResultado.objetivoTrimestral)
  krResultados: KrResultado[];

  @OneToMany(() => Atividade, (atividade) => atividade.objetivoTrimestral)
  atividades: Atividade[];
  objetivonual: any;
}
