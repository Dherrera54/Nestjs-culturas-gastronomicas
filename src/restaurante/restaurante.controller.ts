import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { RestauranteService } from './restaurante.service';
import { RestauranteDto } from './restaurante.dto';
import { RestauranteEntity } from './restaurante.entity';
import { plainToInstance } from 'class-transformer';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('restaurantes')
@UseInterceptors(BusinessErrorsInterceptor)
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.restauranteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':restauranteId')
  async findOne(@Param('restauranteId') restauranteId: string) {
    return await this.restauranteService.findOne(restauranteId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() restauranteDto: RestauranteDto) {
    const restaurante: RestauranteEntity = plainToInstance(
      RestauranteEntity,
      restauranteDto,
    );
    return await this.restauranteService.create(restaurante);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':restauranteId')
  async update(
    @Param('restauranteId') restauranteId: string,
    @Body() restauranteDto: RestauranteDto,
  ) {
    const restaurante: RestauranteEntity = plainToInstance(
      RestauranteEntity,
      restauranteDto,
    );
    return await this.restauranteService.update(restauranteId, restaurante);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':restauranteId')
  @HttpCode(204)
  async delete(@Param('restauranteId') restauranteId: string) {
    return await this.restauranteService.delete(restauranteId);
  }
}
