import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { MongooseModule } from "@nestjs/mongoose";
import { modelsDefinition } from "./models.definition";
import { TournamentController } from "./tournament.controller";
import { TournamentRepository } from "./repository/tournament.repository";

@Module({
    imports: [
        DatabaseModule,
        MongooseModule.forFeature(modelsDefinition),
    ],
    providers: [TournamentRepository],
    controllers: [TournamentController]
})
export class TournamentModule {}