import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { RestauranteDto } from 'src/restaurante/restaurante.dto';
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CulturaRestaurantesService } from './cultura-restaurantes.service';

@Controller('culturas')
@UseInterceptors(BusinessErrorsInterceptor)
export class CulturaRestaurantesController {
  constructor(
    private readonly culturaRestauranteService: CulturaRestaurantesService,
  ) {}

  @Post(':culturaId/restaurantes/:restauranteId')
  async addRestauranteCultura(
    @Param('culturaID') culturaId: string,
    @Param('restauranteId') restauranteId: string,
  ) {
    return await this.culturaRestauranteService.addRestauranteCultura(
      culturaId,
      restauranteId,
    );
  }

  @Get(':culturaId/restaurantes/:restauranteId')
  async findRestauranteByCulturaIdRestauranteId(
    @Param('culturaId') culturaId: string,
    @Param('restauranteId') restauranteId: string,
  ) {
    return await this.culturaRestauranteService.findRestauranteByCulturaIdRestauranteId(
      culturaId,
      restauranteId,
    );
  }

  @Get(':culturaId/restaurantes')
  async findRestaurantesByCulturaId(@Param('culturaId') culturaId: string) {
    return await this.culturaRestauranteService.findRestaurantesByCulturaId(
      culturaId,
    );
  }

  @Put(':culturaId/restaurantes')
  async associateRestaurantesCultura(
    @Body() restaurantesDto: RestauranteDto[],
    @Param('culturaId') culturaId: string,
  ) {
    const restaurantes = plainToInstance(RestauranteEntity, restaurantesDto);
    return await this.culturaRestauranteService.associateRestaurantesCultura(
      culturaId,
      restaurantes,
    );
  }

  @Delete(':culturaId/restaurantes/:restauranteId')
  @HttpCode(204)
  async deleteRestauranteCultura(
    @Param('culturaId') culturaId: string,
    @Param('restauranteId') restauranteId: string,
  ) {
    return await this.culturaRestauranteService.deleteRestauranteCultura(
      culturaId,
      restauranteId,
    );
  }
}
