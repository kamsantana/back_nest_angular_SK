import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { categoriaProviders } from './categoria.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriasController],
  providers: [
    CategoriasService, 
    ...categoriaProviders
  ],
})
export class CategoriasModule {}