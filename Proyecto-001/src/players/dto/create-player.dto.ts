import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ 
    example: 'Lionel Messi', 
    description: 'Nombre completo del jugador' 
  })
  name: string;

  @ApiProperty({ 
    example: 'Delantero', 
    description: 'Posición del jugador en el campo (Portero, Defensa, Mediocampista, Delantero)' 
  })
  position: string;

  @ApiProperty({ 
    example: 1, 
    description: 'ID del equipo al que pertenece el jugador' 
  })
  teamId: number;
}
