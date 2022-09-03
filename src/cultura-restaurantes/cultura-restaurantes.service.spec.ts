import { Test, TestingModule } from '@nestjs/testing';
import { CulturaRestaurantesService } from './cultura-restaurantes.service';

describe('CulturaRestaurantesService', () => {
  let service: CulturaRestaurantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CulturaRestaurantesService],
    }).compile();

    service = module.get<CulturaRestaurantesService>(CulturaRestaurantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
