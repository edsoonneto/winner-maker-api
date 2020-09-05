import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TournamentModule } from './tournament/tournament.module';

@Module({
    imports: [DatabaseModule, TournamentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
