import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaModule } from './cultura/cultura.module';
import { RecetaModule } from './receta/receta.module';
import { CulturaEntity } from './cultura/cultura.entity';
import { RecetaEntity } from './receta/receta.entity';
import { CulturaRecetaModule } from './cultura-receta/cultura-receta.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PaisModule } from './pais/pais.module';
import { PaisEntity } from './pais/pais.entity';
import { RestauranteEntity } from './restaurante/restaurante.entity';
import { ProductoModule } from './producto/producto.module';
import { ProductoEntity } from './producto/producto.entity';
import { CulturaRestaurantesModule } from './cultura-restaurantes/cultura-restaurantes.module';
import { PaisRestauranteModule } from './pais-restaurante/pais-restaurante.module';

@Module({
  imports: [
    CulturaModule,
    RecetaModule,
    RestauranteModule,
    ProductoModule,
    PaisModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [
        CulturaEntity,
        RecetaEntity,
        PaisEntity,
        RestauranteEntity,
        ProductoEntity,
      ],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    CulturaRecetaModule,
    CulturaRestaurantesModule,
    PaisRestauranteModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
