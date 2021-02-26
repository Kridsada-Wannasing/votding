import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export interface UserInterface {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imagePath?: string;
}

@Schema()
export class User implements UserInterface {
  @Prop({ required: true })
  username!: string;

  @Prop({ required: true })
  firstName!: string;

  @Prop({ required: true })
  lastName!: string;

  @Prop({ required: true })
  email!: string;

  @Prop({ required: true })
  password!: string;

  @Prop()
  imagePath?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
