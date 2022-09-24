import { Module, CacheModule } from '@nestjs/common';
import { PaisService } from './pais.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisEntity } from './pais.entity';
import { PaisController } from './pais.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([PaisEntity]), CacheModule.register()],
  providers: [PaisService, JwtService],
  controllers: [PaisController],
})
export class PaisModule {}
