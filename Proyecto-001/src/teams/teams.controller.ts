import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos', description: 'Retorna una lista de todos los equipos con sus jugadores' })
  @ApiResponse({ status: 200, description: 'Lista de equipos obtenida exitosamente', type: [Team] })
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID', description: 'Retorna un equipo específico con sus jugadores' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del equipo', example: 1 })
  @ApiResponse({ status: 200, description: 'Equipo encontrado exitosamente', type: Team })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo', description: 'Crea un nuevo equipo deportivo' })
  @ApiBody({ type: CreateTeamDto, description: 'Datos del equipo a crear' })
  @ApiResponse({ status: 201, description: 'Equipo creado exitosamente', type: Team })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamsService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo', description: 'Actualiza los datos de un equipo existente' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del equipo a actualizar', example: 1 })
  @ApiBody({ type: UpdateTeamDto, description: 'Datos del equipo a actualizar' })
  @ApiResponse({ status: 200, description: 'Equipo actualizado exitosamente', type: Team })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return this.teamsService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo', description: 'Elimina un equipo y todos sus jugadores asociados' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del equipo a eliminar', example: 1 })
  @ApiResponse({ status: 200, description: 'Equipo eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.teamsService.remove(id);
  }
}
