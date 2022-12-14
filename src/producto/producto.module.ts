import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';
import { ProductoService } from './producto.service';
import { ProductoEntity } from './producto.entity';
import { productoController } from './producto.controller';
import { ProductAndCultureController } from './productAndCulture.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ProductoService, JwtService],
  imports: [
    TypeOrmModule.forFeature([ProductoEntity, CulturaEntity]),
    CacheModule.register(),
  ],
  controllers: [productoController, ProductAndCultureController],
})
export class ProductoModule {}
