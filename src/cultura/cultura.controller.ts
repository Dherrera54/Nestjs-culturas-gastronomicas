import {
  Controller,
  UseInterceptors,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { CulturaService } from './cultura.service';
import { CulturaEntity } from './cultura.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CulturaDto } from './cultura.dto';
import { plainToInstance } from 'class-transformer';

@Controller('culturagastronomica')
@UseInterceptors(BusinessErrorsInterceptor)
export class CulturaController {
  constructor(private readonly culturaService: CulturaService) {}

  @Get()
  async findAll() {
    return await this.culturaService.findAll();
  }

  @Get(':culturaId')
  async findOne(@Param('culturaId') culturaId: string) {
    return await this.culturaService.findOne(culturaId);
  }
  @Post()
  async create(@Body() culturaDto: CulturaDto) {
    const cultura: CulturaEntity = plainToInstance(CulturaEntity, culturaDto);
    return await this.culturaService.create(cultura);
  }

  @Put(':culturaId')
  async update(
    @Param('culturaId') culturaId: string,
    @Body() culturaDto: CulturaDto,
  ) {
    const cultura: CulturaEntity = plainToInstance(CulturaEntity, culturaDto);
    return await this.culturaService.update(culturaId, cultura);
  }

  @Delete(':culturaId')
  @HttpCode(204)
  async delete(@Param('culturaId') culturaId: string) {
    return await this.culturaService.delete(culturaId);
  }
}
