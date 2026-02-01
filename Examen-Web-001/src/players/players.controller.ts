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
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './player.entity';

@Controller()
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  // GET /players → obtener todos los jugadores
  @Get('players')
  findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  // GET /players/:id → obtener un jugador por ID
  @Get('players/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Player> {
    return this.playersService.findOne(id);
  }

  // GET /teams/:id/players → obtener jugadores de un equipo específico
  @Get('teams/:id/players')
  findByTeam(@Param('id', ParseIntPipe) teamId: number): Promise<Player[]> {
    return this.playersService.findByTeam(teamId);
  }

  // POST /players → crear un jugador
  @Post('players')
  create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.create(createPlayerDto);
  }

  // PUT /players/:id → actualizar un jugador
  @Put('players/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    return this.playersService.update(id, updatePlayerDto);
  }

  // DELETE /players/:id → eliminar un jugador
  @Delete('players/:id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.playersService.remove(id);
  }
}
