import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { CulturaRecetaService } from './cultura-receta.service';
import { RecetaEntity } from '../receta/receta.entity';
import { CulturaEntity } from '../cultura/cultura.entity';

describe('CulturaRecetaService', () => {
  let service: CulturaRecetaService;
  let culturaRepository: Repository<CulturaEntity>;
  let recetaRepository: Repository<RecetaEntity>;
  let cultura: CulturaEntity;
  let recetasList : RecetaEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [CulturaRecetaService],
    }).compile();

    service = module.get<CulturaRecetaService>(CulturaRecetaService);
    culturaRepository = module.get<Repository<CulturaEntity>>(getRepositoryToken(CulturaEntity));
    recetaRepository = module.get<Repository<RecetaEntity>>(getRepositoryToken(RecetaEntity));
    await seedDatabase();
  });

   const seedDatabase = async () => {
    recetaRepository.clear();
    culturaRepository.clear();

    recetasList = [];
    for(let i = 0; i < 5; i++){
        const receta: RecetaEntity = await recetaRepository.save({
          nombre: faker.company.name(), 
          descripcion: faker.lorem.sentence(),
          foto: faker.image.cats(),
          proceso: faker.lorem.sentence(),
          video: faker.image.imageUrl()
          
        })
        recetasList.push(receta);
    }

    cultura = await culturaRepository.save({
      nombre: faker.company.name(), 
      descripcion: faker.lorem.sentence(), 
      recetas: recetasList
    })
  }


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
