import { RestauranteEntity } from '../restaurante/restaurante.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';

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

  @ManyToMany(() => CulturaEntity, (cultura) => cultura.paises)
  culturas: CulturaEntity[];
}
