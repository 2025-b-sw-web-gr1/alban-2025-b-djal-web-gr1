import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTeamDto } from './create-team.dto';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  @ApiProperty({ 
    example: 'Real Madrid CF', 
    description: 'Nombre actualizado del equipo',
    required: false 
  })
  name?: string;

  @ApiProperty({ 
    example: 'España', 
    description: 'País actualizado del equipo',
    required: false 
  })
  country?: string;
}
