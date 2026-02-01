import { Injectable, NotFoundException } from '@nestjs/common';
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

  // Obtener todos los equipos
  findAll(): Promise<Team[]> {
    return this.teamsRepository.find({ relations: ['players'] });
  }

  // Obtener un equipo por ID
  async findOne(id: number): Promise<Team> {
    const team = await this.teamsRepository.findOne({
      where: { id },
      relations: ['players'],
    });
    if (!team) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }
    return team;
  }

  // Crear un nuevo equipo
  create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamsRepository.create(createTeamDto);
    return this.teamsRepository.save(team);
  }

  // Actualizar un equipo
  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const team = await this.findOne(id);
    Object.assign(team, updateTeamDto);
    return this.teamsRepository.save(team);
  }

  // Eliminar un equipo
  async remove(id: number): Promise<void> {
    const team = await this.findOne(id);
    await this.teamsRepository.remove(team);
  }
}
