import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Player } from '../players/player.entity';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  // Relación 1 a muchos: Un equipo tiene muchos jugadores
  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
