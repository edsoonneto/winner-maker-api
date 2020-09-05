import { IsString, IsNotEmpty, IsDate, IsBoolean, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { ContactDto } from './contact.dto';

export class TournamentDto {
    @IsString()
    @IsNotEmpty()
    public title: string;

    @IsString()
    public description: string;

    @IsString()
    @IsNotEmpty()
    public mode: string;

    @IsArray()
    @IsString()
    public participants: string[];

    @IsDate()
    @IsNotEmpty()
    public beginning: Date;

    @IsDate()
    @IsNotEmpty()
    public ending: Date;

    @IsString()
    @IsNotEmpty()
    public shortName: string;

    @IsBoolean()
    public privacy: boolean;

    @Type(() => ContactDto)
    public contact: ContactDto;
}
