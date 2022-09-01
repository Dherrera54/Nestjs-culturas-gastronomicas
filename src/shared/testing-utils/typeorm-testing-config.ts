/* eslint-disable prettier/prettier */
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/
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
   keepConnectionAlive: true
 }),
 TypeOrmModule.forFeature([CulturaEntity, RecetaEntity]),
];
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/