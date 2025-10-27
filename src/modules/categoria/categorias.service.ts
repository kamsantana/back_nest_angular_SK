import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity'; // Corregido: Categoria (singular/mayúscula)

@Injectable()
export class CategoriasService { // Corregido: CategoriasService (plural/mayúscula)
  constructor(
    @Inject('CATEGORIA_REPOSITORY')
    private categoriaRepository: Repository<Categoria>, // Corregido: Categoria
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> { // Corregido: Categoria
    const newCategoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(newCategoria);
  }

  async findAll(): Promise<Categoria[]> { // Corregido: Categoria[]
    return await this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> { // Corregido: Categoria
    const categoriaFound = await this.categoriaRepository.findOne({ where: { id } });
    if (!categoriaFound) {
      // Usar NotFoundException para devolver un 404
      throw new NotFoundException(`Categoria con ID ${id} no encontrada`);
    }
    return categoriaFound;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> { // Corregido: Categoria
    const categoriaToUpdate = await this.findOne(id);
    // Combina los datos del DTO con la entidad existente
    const updatedCategoria = Object.assign(categoriaToUpdate, updateCategoriaDto);
    return await this.categoriaRepository.save(updatedCategoria);
  }

  async remove(id: number): Promise<void> {
    const categoriaToRemove = await this.findOne(id);
    // Elimina la entidad encontrada
    await this.categoriaRepository.remove(categoriaToRemove);
  }
}
