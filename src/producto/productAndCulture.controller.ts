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
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { ProductoService } from './producto.service';
import { ProductoDto } from './producto.dto';
import { ProductoEntity } from './producto.entity';

@Controller('productoAndCulture')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProductAndCultureController {
  constructor(private readonly productoService: ProductoService) {}

  @Get(':getProductWithRelationShipToCulture')
  async findOne(@Param('name') name: string) {
    return await this.productoService.getProductWithRelationShipToCulture(name);
  }

  @Post()
  async create(@Body() productoDto: ProductoDto) {
    const productoEntity: ProductoEntity = plainToInstance(
      ProductoEntity,
      productoDto,
    );
    return await this.productoService.createProductAndCulture(productoEntity);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() productoDto: ProductoDto) {
    const producto: ProductoEntity = plainToInstance(
      ProductoEntity,
      productoDto,
    );
    return await this.productoService.updateProductAndCulture(id, producto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    return await this.productoService.deleteProductAndCulture(id);
  }
}