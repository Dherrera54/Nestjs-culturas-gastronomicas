import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaService } from './cultura.service';
import { CulturaEntity } from './cultura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CulturaEntity])],
  providers: [CulturaService]
})
export class CulturaModule {}
