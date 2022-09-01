import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { RecetaEntity } from '../receta/receta.entity';
import { ProductService } from './product.service';

@Module({
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([CulturaEntity, RecetaEntity])],
})
export class ProductoModule {}
