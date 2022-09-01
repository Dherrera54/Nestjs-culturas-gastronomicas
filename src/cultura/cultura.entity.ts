import { RestauranteEntity } from 'src/restaurante/restaurante.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { RecetaEntity } from '../receta/receta.entity';

@Entity()
export class CulturaEntity {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
nombre: string;
 
@Column()
descripcion: string;

@OneToMany(() => RecetaEntity, receta => receta.cultura)
recetas: RecetaEntity[];

@ManyToMany(() => RestauranteEntity, restaurante => restaurante.culturas)
 @JoinTable()
 restaurantes: RestauranteEntity[];
}
