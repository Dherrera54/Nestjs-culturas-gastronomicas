/* archivo: src/pais-restaurante/pais-restaurante.service.ts */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PaisEntity } from '../pais/pais.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class PaisRestauranteService {
   constructor(
       @InjectRepository(PaisEntity)
       private readonly paisRepository: Repository<PaisEntity>,
   
       @InjectRepository(RestauranteEntity)
       private readonly restauranteRepository: Repository<RestauranteEntity>
   ) {}

   async addRestaurantePais(paisId: string, restauranteId: string): Promise<PaisEntity> {
       const restaurante: RestauranteEntity = await this.restauranteRepository.findOne({where: {id: restauranteId}});
       if (!restaurante)
         throw new BusinessLogicException("The restaurante with the given id was not found", BusinessError.NOT_FOUND);
     
       const pais: PaisEntity = await this.paisRepository.findOne({where: {id: paisId}, relations: ["restaurantes", "culturas"]})
       if (!pais)
         throw new BusinessLogicException("The pais with the given id was not found", BusinessError.NOT_FOUND);
   
       pais.restaurantes = [...pais.restaurantes, restaurante];
       return await this.paisRepository.save(pais);
     }
   
   async findRestauranteByPaisIdRestauranteId(paisId: string, restauranteId: string): Promise<RestauranteEntity> {
       const restaurante: RestauranteEntity = await this.restauranteRepository.findOne({where: {id: restauranteId}});
       if (!restaurante)
         throw new BusinessLogicException("The restaurante with the given id was not found", BusinessError.NOT_FOUND)
      
       const pais: PaisEntity = await this.paisRepository.findOne({where: {id: paisId}, relations: ["restaurantes"]});
       if (!pais)
         throw new BusinessLogicException("The pais with the given id was not found", BusinessError.NOT_FOUND)
  
       const paisRestaurante: RestauranteEntity = pais.restaurantes.find(e => e.id === restaurante.id);
  
       if (!paisRestaurante)
         throw new BusinessLogicException("The restaurante with the given id is not associated to the pais", BusinessError.PRECONDITION_FAILED)
  
       return paisRestaurante;
   }
   
   async findRestaurantesByPaisId(paisId: string): Promise<RestauranteEntity[]> {
       const pais: PaisEntity = await this.paisRepository.findOne({where: {id: paisId}, relations: ["restaurantes"]});
       if (!pais)
         throw new BusinessLogicException("The pais with the given id was not found", BusinessError.NOT_FOUND)
      
       return pais.restaurantes;
   }
   
   async associateRestaurantesPais(paisId: string, restaurantes: RestauranteEntity[]): Promise<PaisEntity> {
       const pais: PaisEntity = await this.paisRepository.findOne({where: {id: paisId}, relations: ["restaurantes"]});
   
       if (!pais)
         throw new BusinessLogicException("The pais with the given id was not found", BusinessError.NOT_FOUND)
   
       for (let i = 0; i < restaurantes.length; i++) {
         const restaurante: RestauranteEntity = await this.restauranteRepository.findOne({where: {id: restaurantes[i].id}});
         if (!restaurante)
           throw new BusinessLogicException("The restaurante with the given id was not found", BusinessError.NOT_FOUND)
       }
   
       pais.restaurantes = restaurantes;
       return await this.paisRepository.save(pais);
     }
   
   async deleteRestaurantePais(paisId: string, restauranteId: string){
       const restaurante: RestauranteEntity = await this.restauranteRepository.findOne({where: {id: restauranteId}});
       if (!restaurante)
         throw new BusinessLogicException("The restaurante with the given id was not found", BusinessError.NOT_FOUND)
   
       const pais: PaisEntity = await this.paisRepository.findOne({where: {id: paisId}, relations: ["restaurantes"]});
       if (!pais)
         throw new BusinessLogicException("The pais with the given id was not found", BusinessError.NOT_FOUND)
   
       const paisRestaurante: RestauranteEntity = pais.restaurantes.find(e => e.id === restaurante.id);
   
       if (!paisRestaurante)
           throw new BusinessLogicException("The restaurante with the given id is not associated to the pais", BusinessError.PRECONDITION_FAILED)

       pais.restaurantes = pais.restaurantes.filter(e => e.id !== restauranteId);
       await this.paisRepository.save(pais);
   }  
}