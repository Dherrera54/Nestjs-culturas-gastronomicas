import { Test, TestingModule } from '@nestjs/testing';
import { PaisRestauranteService } from './pais-restaurante.service';

describe('PaisRestauranteService', () => {
  let service: PaisRestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaisRestauranteService],
    }).compile();

    service = module.get<PaisRestauranteService>(PaisRestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
