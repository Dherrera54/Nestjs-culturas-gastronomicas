import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { CulturaRestaurantesService } from './cultura-restaurantes.service';
import { CulturaRestaurantesController } from './cultura-restaurantes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CulturaEntity, RestauranteEntity])],
  providers: [CulturaRestaurantesService],
  controllers: [CulturaRestaurantesController]
})
export class CulturaRestaurantesModule {}
