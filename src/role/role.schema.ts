
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({ timestamps: true })
export class Role {
    @Prop({ unique: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    permissions: string[];
    

}

export const RoleSchema = SchemaFactory.createForClass(Role);
