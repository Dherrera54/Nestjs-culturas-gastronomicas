import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { CulturaRestaurantesService } from './cultura-restaurantes.service';

@Module({
  imports: [TypeOrmModule.forFeature([CulturaEntity, RestauranteEntity])],
  providers: [CulturaRestaurantesService]
})
export class CulturaRestaurantesModule {}
