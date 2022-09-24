import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PaisEntity } from '../pais/pais.entity';
import { PaisRestauranteService } from './pais-restaurante.service';
import { PaisRestauranteController } from './pais-restaurante.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [PaisRestauranteService, JwtService],
  imports: [TypeOrmModule.forFeature([PaisEntity, RestauranteEntity]), CacheModule.register()],
  controllers: [PaisRestauranteController],
})
export class PaisRestauranteModule {}
