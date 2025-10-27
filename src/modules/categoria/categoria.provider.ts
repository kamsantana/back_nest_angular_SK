import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity"; // ¡CORREGIDO A 'C' MAYÚSCULA!
import { Inject } from "@nestjs/common";

export const categoriaProviders = [
{
    provide: 'CATEGORIA_REPOSITORY',
    // Aquí también se usa Categoria con mayúscula
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria), 
    inject: ['DATABASE_CONNECTION_POSTGRES']
}
];