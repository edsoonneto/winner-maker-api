import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Contact } from './contact.schema';

@Schema({ timestamps: true })
export class Tournament extends Document {
    @Prop({ required: true })
    public title: string;

    @Prop()
    public description: string;

    @Prop({ required: true })
    public mode: string;

    @Prop({ type: [String], default: [] })
    public participants: string[];

    @Prop({ required: true })
    public beginning: Date;

    @Prop()
    public ending: Date;

    @Prop({ required: true, unique: true })
    public shortName: string;

    @Prop({ default: false })
    public privacy: boolean;

    @Prop({ type: Contact })
    public contact: Contact;
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);
