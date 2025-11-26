import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsInt()
    @IsNotEmpty()
    stock: number;

    @IsOptional()
    @IsString()
    imagen?: string;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsBoolean()
    estado?: boolean;

    @IsInt()
    @IsNotEmpty()
    categoriaId: number;
}
