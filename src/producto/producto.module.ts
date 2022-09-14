import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { ProductoService } from './producto.service';
import { ProductoEntity } from './producto.entity';
import { productoController } from './producto.controller';
import { ProductAndCultureController } from './productAndCulture.controller';

@Module({
  providers: [ProductoService],
  imports: [TypeOrmModule.forFeature([ProductoEntity, CulturaEntity])],
  controllers: [productoController, ProductAndCultureController],
})
export class ProductoModule {}
