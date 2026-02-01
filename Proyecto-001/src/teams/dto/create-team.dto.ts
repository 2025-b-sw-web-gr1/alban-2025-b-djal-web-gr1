import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ 
    example: 'Barcelona FC', 
    description: 'Nombre del equipo deportivo' 
  })
  name: string;

  @ApiProperty({ 
    example: 'España', 
    description: 'País de origen del equipo' 
  })
  country: string;
}
