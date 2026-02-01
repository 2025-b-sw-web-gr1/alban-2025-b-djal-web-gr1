import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { Team } from './teams/team.entity';
import { Player } from './players/player.entity';

@Module({
  imports: [
    // Configuración de TypeORM con SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Team, Player],
      synchronize: true, // Solo para desarrollo, NO usar en producción
    }),
    TeamsModule,
    PlayersModule,
  ],
})
export class AppModule {}
