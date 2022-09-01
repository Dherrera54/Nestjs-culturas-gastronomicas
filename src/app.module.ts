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

@Module({
  imports: [
    CulturaModule,
    RecetaModule,
    RestauranteModule,
    PaisModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'database',
      entities: [CulturaEntity, RecetaEntity, PaisEntity, RestauranteEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    CulturaRecetaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
