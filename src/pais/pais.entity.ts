import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RestauranteEntity } from '../restaurante/restaurante.entity';

@Entity()
export class PaisEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @OneToMany(() => RestauranteEntity, (restaurante) => restaurante.pais)
  restaurantes: RestauranteEntity[];
}
