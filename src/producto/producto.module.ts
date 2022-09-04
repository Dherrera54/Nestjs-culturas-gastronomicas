import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { ProductoService } from './producto.service';
import { ProductoEntity } from './producto.entity';

@Module({
  providers: [ProductoService],
  imports: [TypeOrmModule.forFeature([ProductoEntity, CulturaEntity])],
})
export class ProductoModule {}
