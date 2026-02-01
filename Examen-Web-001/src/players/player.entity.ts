import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from '../teams/team.entity';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  teamId: number;

  // Relación muchos a 1: Muchos jugadores pertenecen a un equipo
  @ManyToOne(() => Team, (team) => team.players, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'teamId' })
  team: Team;
}
