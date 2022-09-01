import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../../cultura/cultura.entity';
import { RecetaEntity } from '../../receta/receta.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [CulturaEntity, RecetaEntity],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([CulturaEntity, RecetaEntity]),
];

export const TypeOrmTestingConfigUser = () => [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    dropSchema: true,
    entities: [CulturaEntity, RecetaEntity],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([CulturaEntity, RecetaEntity]),
];
