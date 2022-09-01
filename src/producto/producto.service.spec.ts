import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';

import { faker } from '@faker-js/faker';
import { ProductService } from './product.service';
import { ProductoEntity } from './producto.entity';
import { RecetaEntity } from '../receta/receta.entity';

describe('ProductoService', () => {
  let service: ProductService;
  let repository: Repository<ProductoEntity>;
  let productList: ProductoEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repository = module.get<Repository<ProductoEntity>>(
      getRepositoryToken(ProductoEntity),
    );
    await seedDatabase();
  });
  const seedDatabase = async () => {
    repository.clear();
    productList = [];
    for (let i = 0; i < 5; i++) {
      const cultura: ProductoEntity = await repository.save({
        nombre: faker.company.name(),
        descripcion: faker.lorem.sentence(),
        historia: faker.lorem.sentence(),
        categoria: 'VEGETAL',
      });
      productList.push(cultura);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne should return a product by id', async () => {
    const storedCultura: ProductoEntity = productList[0];
    const product: ProductoEntity = await service.findOne(storedCultura.id);
    expect(product).not.toBeNull();
    expect(product.nombre).toEqual(storedCultura.nombre);
    expect(product.descripcion).toEqual(storedCultura.descripcion);
  });

  it('findOne should throw an exception for an invalid product', async () => {
    await expect(() => service.findOne('0')).rejects.toHaveProperty(
      'message',
      'La cultura gastronomica con id dado no se encontró',
    );
  });

  it('create should return a new product', async () => {
    const cd = {
      id: '',
      nombre: faker.company.name(),
      descripcion: faker.lorem.sentence(),
      historia: faker.lorem.sentence(),
      categoria: 'VEGETAL',
      cultura: [],
    };

    const newProduct: ProductoEntity = await service.create(cd);
    expect(newProduct).not.toBeNull();

    const storedProduct: ProductoEntity = await repository.findOne({
      where: { id: newProduct.id },
    });
    expect(storedProduct).not.toBeNull();
    expect(storedProduct.nombre).toEqual(newProduct.nombre);
    expect(storedProduct.descripcion).toEqual(newProduct.descripcion);
  });

  it('update should modify a product', async () => {
    const product: ProductoEntity = productList[0];
    product.nombre = 'New name';
    product.descripcion = 'New description';
    const updatedCulture: ProductoEntity = await service.update(
      product.id,
      product,
    );
    expect(updatedCulture).not.toBeNull();
    const storedCultura: ProductoEntity = await repository.findOne({
      where: { id: product.id },
    });
    expect(storedCultura).not.toBeNull();
    expect(storedCultura.nombre).toEqual(product.nombre);
    expect(storedCultura.descripcion).toEqual(product.descripcion);
  });

  it('update should throw an exception for an invalid culture', async () => {
    let product: ProductoEntity = ProductoEntity[0];
    product = {
      ...product,
      nombre: 'New name',
      descripcion: 'New description',
    };
    await expect(() => service.update('0', product)).rejects.toHaveProperty(
      'message',
      'El producto no se encontro',
    );
  });

  it('delete should remove a product', async () => {
    const product: ProductoEntity = productList[0];
    await service.delete(product.id);
    const deletedCulture: ProductoEntity = await repository.findOne({
      where: { id: product.id },
    });
    expect(deletedCulture).toBeNull();
  });

  it('delete should throw an exception for an invalid product', async () => {
    const product: ProductoEntity = productList[0];
    await expect(() => service.delete(product.id + 1)).rejects.toHaveProperty(
      'message',
      'El producto no se encontro para eliminarse',
    );
  });
});
