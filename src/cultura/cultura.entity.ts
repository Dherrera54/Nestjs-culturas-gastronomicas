import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RecetaEntity } from '../receta/receta.entity';
import { RestauranteEntity } from '../restaurante/restaurante.entity';
import { PaisEntity } from '../pais/pais.entity';
import { ProductoEntity } from '../producto/producto.entity';

@Entity()
export class CulturaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @OneToMany(() => RecetaEntity, (receta) => receta.cultura)
  recetas: RecetaEntity[];

  @ManyToMany(() => RestauranteEntity, (restaurante) => restaurante.culturas)
  @JoinTable()
  restaurantes: RestauranteEntity[];

  @ManyToMany(() => PaisEntity, (pais) => pais.culturas)
  @JoinTable()
  paises: PaisEntity[];

  @ManyToMany(() => ProductoEntity, (producto) => producto.cultura)
  @JoinTable()
  productos: ProductoEntity[];
}
