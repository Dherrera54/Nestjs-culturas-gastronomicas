import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaService } from './cultura.service';
import { CulturaEntity } from './cultura.entity';
import { CulturaController } from './cultura.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([CulturaEntity]), CacheModule.register({
    path: ':memory:',
    options: {
      ttl: 5
    },
  
  })
  ],
  providers: [CulturaService, JwtService],
  controllers: [CulturaController],
})
export class CulturaModule {}
