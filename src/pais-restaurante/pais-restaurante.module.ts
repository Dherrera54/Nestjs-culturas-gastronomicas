import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PaisEntity } from '../pais/pais.entity';
import { PaisRestauranteService } from './pais-restaurante.service';
import { PaisRestauranteController } from './pais-restaurante.controller';

@Module({
  providers: [PaisRestauranteService],
  imports: [TypeOrmModule.forFeature([PaisEntity, RestauranteEntity])],
  controllers: [PaisRestauranteController],
})
export class PaisRestauranteModule {}