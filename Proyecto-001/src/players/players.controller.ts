import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { Player } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@ApiTags('players')
@Controller()
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('players')
  @ApiOperation({ summary: 'Obtener todos los jugadores', description: 'Retorna una lista de todos los jugadores con información de su equipo' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores obtenida exitosamente', type: [Player] })
  findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Get('players/:id')
  @ApiOperation({ summary: 'Obtener un jugador por ID', description: 'Retorna un jugador específico con información de su equipo' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del jugador', example: 1 })
  @ApiResponse({ status: 200, description: 'Jugador encontrado exitosamente', type: Player })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Player> {
    return this.playersService.findOne(id);
  }

  @Get('teams/:teamId/players')
  @ApiOperation({ summary: 'Obtener jugadores por equipo', description: 'Retorna todos los jugadores que pertenecen a un equipo específico' })
  @ApiParam({ name: 'teamId', type: 'number', description: 'ID del equipo', example: 1 })
  @ApiResponse({ status: 200, description: 'Lista de jugadores del equipo obtenida exitosamente', type: [Player] })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findByTeam(@Param('teamId', ParseIntPipe) teamId: number): Promise<Player[]> {
    return this.playersService.findByTeam(teamId);
  }

  @Post('players')
  @ApiOperation({ summary: 'Crear un nuevo jugador', description: 'Crea un nuevo jugador y lo asocia a un equipo existente' })
  @ApiBody({ type: CreatePlayerDto, description: 'Datos del jugador a crear' })
  @ApiResponse({ status: 201, description: 'Jugador creado exitosamente', type: Player })
  @ApiResponse({ status: 400, description: 'Datos inválidos o equipo no existe' })
  create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.create(createPlayerDto);
  }

  @Put('players/:id')
  @ApiOperation({ summary: 'Actualizar un jugador', description: 'Actualiza los datos de un jugador existente' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del jugador a actualizar', example: 1 })
  @ApiBody({ type: UpdatePlayerDto, description: 'Datos del jugador a actualizar' })
  @ApiResponse({ status: 200, description: 'Jugador actualizado exitosamente', type: Player })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Delete('players/:id')
  @ApiOperation({ summary: 'Eliminar un jugador', description: 'Elimina un jugador del sistema' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID del jugador a eliminar', example: 1 })
  @ApiResponse({ status: 200, description: 'Jugador eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.playersService.remove(id);
  }
}
