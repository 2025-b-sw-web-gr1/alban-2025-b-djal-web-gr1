import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Player } from '../players/player.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Team {
  @ApiProperty({ example: 1, description: 'ID único del equipo' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Barcelona FC', description: 'Nombre del equipo' })
  @Column()
  name: string;

  @ApiProperty({ example: 'España', description: 'País del equipo' })
  @Column()
  country: string;

  @ApiProperty({ type: () => [Player], description: 'Lista de jugadores del equipo' })
  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
