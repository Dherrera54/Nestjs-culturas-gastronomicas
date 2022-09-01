/* eslint-disable prettier/prettier */
import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class PaisEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 nombre: string;
 
 @Column()
 descripcion: string;
 
 @OneToMany(() => RestauranteEntity, restaurante => restaurante.pais)
restaurantes: RestauranteEntity[];

}