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

@Controller('producto')
@UseInterceptors(BusinessErrorsInterceptor)
export class productoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  async get() {
    return await this.productoService.findAll();
  }

  @Get(':productoId')
  async findOne(@Param('id') productoId: string) {
    console.log(productoId);
    return await this.productoService.findOne(productoId);
  }

  @Post()
  async create(@Body() productoDto: ProductoDto) {
    const productoEntity: ProductoEntity = plainToInstance(
      ProductoEntity,
      productoDto,
    );
    return await this.productoService.create(productoEntity);
  }

  @Put(':add')
  async update(@Param('id') id: string, @Body() productoDto: ProductoDto) {
    const producto: ProductoEntity = plainToInstance(
      ProductoEntity,
      productoDto,
    );
    return await this.productoService.update(id, producto);
  }

  @Delete(':delete')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    return await this.productoService.deleteProductAndCulture(id);
  }
}
