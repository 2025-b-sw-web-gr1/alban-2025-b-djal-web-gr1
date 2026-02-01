import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from '../teams/team.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Player {
  @ApiProperty({ example: 1, description: 'ID único del jugador' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Lionel Messi', description: 'Nombre completo del jugador' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Delantero', description: 'Posición del jugador en el campo' })
  @Column()
  position: string;

  @ApiProperty({ example: 1, description: 'ID del equipo al que pertenece el jugador' })
  @Column()
  teamId: number;

  @ApiProperty({ type: () => Team, description: 'Equipo al que pertenece el jugador' })
  @ManyToOne(() => Team, (team) => team.players, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'teamId' })
  team: Team;
}
