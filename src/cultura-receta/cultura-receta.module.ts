import { Module } from '@nestjs/common';
import { CulturaRecetaService } from './cultura-receta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { RecetaEntity } from '../receta/receta.entity';
import { CulturaService } from '../cultura/cultura.service';

@Module({
  providers: [CulturaRecetaService],
  imports: [TypeOrmModule.forFeature([CulturaEntity, RecetaEntity])],
})
export class CulturaRecetaModule {}
