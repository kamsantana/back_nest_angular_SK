import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria { // Corregido: La clase debe usar PascalCase (Mayúscula inicial)

@PrimaryGeneratedColumn()
id: number;

@Column()
nombre: string;

@Column()
detalle: string;


}