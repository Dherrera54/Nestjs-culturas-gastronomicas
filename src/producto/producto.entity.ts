import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CulturaEntity } from '../cultura/cultura.entity';

@Entity()
export class ProductoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  historia: string;

  @Column()
  categoria: string;

  @ManyToMany(() => CulturaEntity, (cultura) => CulturaEntity.name)
  @JoinTable()
  cultura: CulturaEntity[];
}
