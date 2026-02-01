import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  findAll(): Promise<Team[]> {
    return this.teamsRepository.find({ relations: ['players'] });
  }

  findOne(id: number): Promise<Team> {
    return this.teamsRepository.findOne({ 
      where: { id }, 
      relations: ['players'] 
    });
  }

  create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamsRepository.create(createTeamDto);
    return this.teamsRepository.save(team);
  }

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
    await this.teamsRepository.update(id, updateTeamDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.teamsRepository.delete(id);
  }
}
