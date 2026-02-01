import { Injectable } from '@nestjs/common';
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

  findAll(): Promise<Player[]> {
    return this.playersRepository.find({ relations: ['team'] });
  }

  findOne(id: number): Promise<Player> {
    return this.playersRepository.findOne({ 
      where: { id }, 
      relations: ['team'] 
    });
  }

  findByTeam(teamId: number): Promise<Player[]> {
    return this.playersRepository.find({ 
      where: { teamId }, 
      relations: ['team'] 
    });
  }

  create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playersRepository.create(createPlayerDto);
    return this.playersRepository.save(player);
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    await this.playersRepository.update(id, updatePlayerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.playersRepository.delete(id);
  }
}
