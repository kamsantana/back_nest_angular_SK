import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service'; // Corregido: Mayúscula inicial

// Definimos un mock del repositorio para simular sus métodos
const mockCategoriaRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
};

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriasService, // Corregido: Mayúscula inicial
        // Proveedor del repositorio mockeado para la inyección
        {
          provide: 'CATEGORIA_REPOSITORY',
          useValue: mockCategoriaRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Puedes añadir más pruebas aquí, por ejemplo:
  // it('should return an array of categories', async () => {
  //   mockCategoriaRepository.find.mockResolvedValueOnce([]);
  //   expect(await service.findAll()).toEqual([]);
  // });
});