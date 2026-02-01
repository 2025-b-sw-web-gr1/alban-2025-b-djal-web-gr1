import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { Team } from './teams/team.entity';
import { Player } from './players/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Team, Player],
      synchronize: true,
    }),
    TeamsModule,
    PlayersModule,
  ],
})
export class AppModule {}
