import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tournament } from '../../database/schemas/tournament.schema';

@Injectable()
export class TournamentRepository {
    constructor(@InjectModel('TournamentModel') private readonly tournamentModel: Model<Tournament>) {}

    public createTournament(value: Partial<Tournament>): Promise<Tournament> {
        return this.tournamentModel.create(value as Tournament);
    }
}
