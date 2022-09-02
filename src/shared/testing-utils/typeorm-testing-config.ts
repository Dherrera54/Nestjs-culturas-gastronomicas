import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../../cultura/cultura.entity';
import { RecetaEntity } from '../../receta/receta.entity';
import { ProductoEntity } from '../../producto/producto.entity';
import { PaisEntity } from '../../pais/pais.entity';
import { RestauranteEntity } from '../../restaurante/restaurante.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [RestauranteEntity, PaisEntity,CulturaEntity, RecetaEntity],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([RestauranteEntity,PaisEntity,CulturaEntity, RecetaEntity]),
];

