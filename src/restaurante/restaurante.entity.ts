import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CulturaEntity } from '../cultura/cultura.entity';
import { PaisEntity } from '../pais/pais.entity';

@Entity()
export class RestauranteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  @Column()
  estrellas: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => PaisEntity, (pais) => pais.restaurantes)
  pais: PaisEntity;

  @ManyToMany(() => CulturaEntity, (cultura) => cultura.restaurantes)
  culturas: CulturaEntity[];
}
