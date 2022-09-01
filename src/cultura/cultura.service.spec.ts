import { Test, TestingModule } from '@nestjs/testing';
import { CulturaService } from './cultura.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { CulturaEntity } from './cultura.entity';
import { faker } from '@faker-js/faker';

describe('CulturaService', () => {
  let service: CulturaService;
  let repository: Repository<CulturaEntity>;
  let culturaList: CulturaEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [CulturaService],
    }).compile();

    service = module.get<CulturaService>(CulturaService);
    repository = module.get<Repository<CulturaEntity>>(getRepositoryToken(CulturaEntity));
    await seedDatabase();
  });
  const seedDatabase = async () => {
   repository.clear();
   culturaList = [];
   for(let i = 0; i < 5; i++){
       const cultura: CulturaEntity = await repository.save({
       nombre: faker.company.name(),
       descripcion: faker.lorem.sentence()})
      culturaList.push(cultura);
   }
 }

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
