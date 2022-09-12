import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaService } from './cultura.service';
import { CulturaEntity } from './cultura.entity';
import { CulturaController } from './cultura.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CulturaEntity])],
  providers: [CulturaService],
  controllers: [CulturaController],
})
export class CulturaModule {}
