import { Prop } from '@nestjs/mongoose';

export class Contact {
    @Prop({ required: true })
    public email: string;

    @Prop()
    public phone: string;
}
