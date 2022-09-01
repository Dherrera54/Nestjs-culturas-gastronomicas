import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CulturaEntity } from './cultura.entity';
import {
  BusinessError,
  BusinessLogicException,
} from '../shared/errors/business-errors';

@Injectable()
export class CulturaService {
  constructor(
    @InjectRepository(CulturaEntity)
    private readonly culturaRepository: Repository<CulturaEntity>,
  ) {}

  async findAll(): Promise<CulturaEntity[]> {
    return await this.culturaRepository.find({ relations: ['recetas'] });
  }

  async findOne(id: string): Promise<CulturaEntity> {
    const cultura: CulturaEntity = await this.culturaRepository.findOne({
      where: { id },
      relations: ['recetas'],
    });
    if (!cultura)
      throw new BusinessLogicException(
        'La cultura gastronomica con id dado no se encontró',
        BusinessError.NOT_FOUND,
      );

    return cultura;
  }

  async create(cultura: CulturaEntity): Promise<CulturaEntity> {
    return await this.culturaRepository.save(cultura);
  }

  async update(id: string, cultura: CulturaEntity): Promise<CulturaEntity> {
    const persistedCultura: CulturaEntity =
      await this.culturaRepository.findOne({ where: { id } });
    if (!persistedCultura)
      throw new BusinessLogicException(
        'La cultura gastronomica con id dado no se encontró',
        BusinessError.NOT_FOUND,
      );

    cultura.id = id;

    return await this.culturaRepository.save(cultura);
  }
  async delete(id: string) {
    const cultura: CulturaEntity = await this.culturaRepository.findOne({
      where: { id },
    });
    if (!cultura)
      throw new BusinessLogicException(
        'La cultura gastronomica con id dado no se encontró',
        BusinessError.NOT_FOUND,
      );

    await this.culturaRepository.remove(cultura);
  }
}
