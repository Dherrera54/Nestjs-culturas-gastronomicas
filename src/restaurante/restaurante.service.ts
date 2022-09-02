import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestauranteEntity } from './restaurante.entity';
import {
    BusinessError,
    BusinessLogicException,
  } from '../shared/errors/business-errors';

@Injectable()
export class RestauranteService {
    constructor(
        @InjectRepository(RestauranteEntity)
        private readonly restauranteRepository: Repository<RestauranteEntity>
    ){}

    async findAll(): Promise<RestauranteEntity[]> {
        return await this.restauranteRepository.find({ relations: ["culturas"] });
    }

    async findOne(id: string): Promise<RestauranteEntity> {
        const restaurante: RestauranteEntity = await this.restauranteRepository.findOne({where: {id}, relations: ["culturas"] } );
        if (!restaurante)
          throw new BusinessLogicException("El restaurante con el id dado no fue encontrado", BusinessError.NOT_FOUND);
   
        return restaurante;
    }

    async create(restaurante: RestauranteEntity): Promise<RestauranteEntity> {
        return await this.restauranteRepository.save(restaurante);
    }

    async update(id: string, restaurante: RestauranteEntity): Promise<RestauranteEntity> {
        const persistedRestaurante: RestauranteEntity = await this.restauranteRepository.findOne({where:{id}});
        if (!persistedRestaurante)
          throw new BusinessLogicException("El restaurante con el id dado no fue encontrado", BusinessError.NOT_FOUND);
       
        restaurante.id = id; 
       
        return await this.restauranteRepository.save(restaurante);
    }

    async delete(id: string) {
        const restaurante: RestauranteEntity = await this.restauranteRepository.findOne({where:{id}});
        if (!restaurante)
          throw new BusinessLogicException("El restaurante con el id dado no fue encontrado", BusinessError.NOT_FOUND);
     
        await this.restauranteRepository.remove(restaurante);
    }
}
