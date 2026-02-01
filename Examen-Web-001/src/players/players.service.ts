import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  // Obtener todos los jugadores
  findAll(): Promise<Player[]> {
    return this.playersRepository.find({ relations: ['team'] });
  }

  // Obtener un jugador por ID
  async findOne(id: number): Promise<Player> {
    const player = await this.playersRepository.findOne({
      where: { id },
      relations: ['team'],
    });
    if (!player) {
      throw new NotFoundException(`Jugador con ID ${id} no encontrado`);
    }
    return player;
  }

  // Obtener jugadores de un equipo específico
  findByTeam(teamId: number): Promise<Player[]> {
    return this.playersRepository.find({
      where: { teamId },
      relations: ['team'],
    });
  }

  // Crear un nuevo jugador
  create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playersRepository.create(createPlayerDto);
    return this.playersRepository.save(player);
  }

  // Actualizar un jugador
  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const player = await this.findOne(id);
    Object.assign(player, updatePlayerDto);
    return this.playersRepository.save(player);
  }

  // Eliminar un jugador
  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playersRepository.remove(player);
  }
}
