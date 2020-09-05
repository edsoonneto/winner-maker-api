import { IsString, IsNotEmpty } from 'class-validator';

export class ContactDto {
    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsString()
    public phone: string;
}
