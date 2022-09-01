import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RecetaEntity } from '../receta/receta.entity';

@Entity()
export class CulturaEntity {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
nombre: string;
 
@Column()
descricion: string;

@OneToMany(() => RecetaEntity, receta => receta.cultura)
recetas: CulturaEntity[];

}
