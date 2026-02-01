import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePlayerDto } from './create-player.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @ApiProperty({ 
    example: 'Cristiano Ronaldo', 
    description: 'Nombre actualizado del jugador',
    required: false 
  })
  name?: string;

  @ApiProperty({ 
    example: 'Mediocampista', 
    description: 'Posición actualizada del jugador',
    required: false 
  })
  position?: string;

  @ApiProperty({ 
    example: 2, 
    description: 'ID del nuevo equipo del jugador',
    required: false 
  })
  teamId?: number;
}
