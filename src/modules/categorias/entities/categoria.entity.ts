import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class categoria {
@PrimaryGeneratedColumn()
id: number;

@Column()
nombre: string;

@Column()
detalle: string;


}