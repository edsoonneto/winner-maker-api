import { Controller, Post, BadGatewayException, Body } from '@nestjs/common';
import { TournamentRepository } from './repository/tournament.repository';
import { Tournament } from '../database/schemas/tournament.schema';
import { TournamentDto } from './dto/tournament.dto';

@Controller('tournament')
export class TournamentController {
    constructor(private readonly tournamentRepository: TournamentRepository) {}

    @Post('create')
    public async createTournament(@Body() body: TournamentDto): Promise<Tournament> {
        try {
            const result = await this.tournamentRepository.createTournament(body);
            return result;
        } catch (error) {
            console.log(error);
            throw new BadGatewayException(error);
        }
    }
}
