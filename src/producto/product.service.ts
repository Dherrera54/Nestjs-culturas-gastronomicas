import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  BusinessError,
  BusinessLogicException,
} from '../shared/errors/business-errors';
import { ProductoEntity } from './producto.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductoEntity)
    private readonly productoEntityRepository: Repository<ProductoEntity>,
  ) {}

  async findAll(): Promise<ProductoEntity[]> {
    return await this.productoEntityRepository.find({ relations: ['recetas'] });
  }

  async findOne(id: string): Promise<ProductoEntity> {
    const cultura: ProductoEntity = await this.productoEntityRepository.findOne(
      {
        where: { id },
      },
    );
    if (!cultura)
      throw new BusinessLogicException(
        'La cultura gastronomica con id dado no se encontró',
        BusinessError.NOT_FOUND,
      );

    return cultura;
  }

  async create(productoEntity: ProductoEntity): Promise<ProductoEntity> {
    return await this.productoEntityRepository.save(productoEntity);
  }

  async update(
    id: string,
    productoEntity: ProductoEntity,
  ): Promise<ProductoEntity> {
    const persistedCultura: ProductoEntity =
      await this.productoEntityRepository.findOne({ where: { id } });
    if (!persistedCultura)
      throw new BusinessLogicException(
        'El producto no se encontro',
        BusinessError.NOT_FOUND,
      );

    productoEntity.id = id;

    return await this.productoEntityRepository.save(productoEntity);
  }
  async delete(id: string) {
    const cultura: ProductoEntity = await this.productoEntityRepository.findOne(
      {
        where: { id },
      },
    );
    if (!cultura)
      throw new BusinessLogicException(
        'El producto no se encontro para eliminarse',
        BusinessError.NOT_FOUND,
      );

    await this.productoEntityRepository.remove(cultura);
  }
}
