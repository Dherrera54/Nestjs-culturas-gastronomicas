import { Module } from '@nestjs/common';
import { CulturaRecetaService } from './cultura-receta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { RecetaEntity } from '../receta/receta.entity';
import { CulturaRecetaController } from './cultura-receta.controller';

@Module({
  providers: [CulturaRecetaService],
  imports: [TypeOrmModule.forFeature([CulturaEntity, RecetaEntity])],
  controllers: [CulturaRecetaController],
})
export class CulturaRecetaModule {}
