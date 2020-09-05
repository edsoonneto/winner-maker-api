import { ModelDefinition } from '@nestjs/mongoose';
import { TournamentSchema } from '../database/schemas/tournament.schema';

export const modelsDefinition: ModelDefinition[] = [
    {
        name: 'TournamentModel',
        collection: 'tournaments',
        schema: TournamentSchema,
    },
];
