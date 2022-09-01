import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaModule } from './cultura/cultura.module';
import { RecetaModule } from './receta/receta.module';
import { CulturaEntity } from './cultura/cultura.entity';
import { RecetaEntity } from './receta/receta.entity';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PaisModule } from './pais/pais.module';

@Module({
  imports: [CulturaModule, RecetaModule,
  TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'postgres',
     database: 'cultura',
     entities: [CulturaEntity, RecetaEntity],
     dropSchema: true,
     synchronize: true,
     keepConnectionAlive: true
   }),
  RestauranteModule,
  PaisModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
