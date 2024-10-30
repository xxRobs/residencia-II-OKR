import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjetivoAnual } from './entities/objetivo-anual.entity';

@Injectable()
export class ObjetivoAnualService {
  constructor(
    @InjectRepository(ObjetivoAnual)
    private objetivoAnualRepository: Repository<ObjetivoAnual>, // Injeta o repositório de ObjetivoAnual
  ) {}

  // Busca todos os objetivos anuais com seus objetivos trimestrais relacionados
  findAll(): Promise<ObjetivoAnual[]> {
    return this.objetivoAnualRepository.find({
      relations: ['objetivosTrimestrais'],
    });
  }

  // Busca um objetivo anual por ID, incluindo objetivos trimestrais
  findOne(id: number): Promise<ObjetivoAnual> {
    return this.objetivoAnualRepository.findOne({
      where: { id },
      relations: ['objetivosTrimestrais'],
    });
  }

  // Cria um novo objetivo anual
  create(objetivoAnual: ObjetivoAnual): Promise<ObjetivoAnual> {
    return this.objetivoAnualRepository.save(objetivoAnual);
  }

  // Atualiza um objetivo anual existente por ID e retorna o atualizado
  async update(
    id: number,
    objetivoAnual: ObjetivoAnual,
  ): Promise<ObjetivoAnual> {
    await this.objetivoAnualRepository.update(id, objetivoAnual);
    return this.findOne(id);
  }

  // Remove um objetivo anual por ID
  async remove(id: number): Promise<void> {
    await this.objetivoAnualRepository.delete(id);
  }
}
