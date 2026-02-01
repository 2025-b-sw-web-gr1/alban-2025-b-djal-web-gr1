import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  // GET /teams → obtener todos los equipos
  @Get()
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  // GET /teams/:id → obtener un equipo por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  // POST /teams → crear un equipo
  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamsService.create(createTeamDto);
  }

  // PUT /teams/:id → actualizar un equipo
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return this.teamsService.update(id, updateTeamDto);
  }

  // DELETE /teams/:id → eliminar un equipo
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.teamsService.remove(id);
  }
}
