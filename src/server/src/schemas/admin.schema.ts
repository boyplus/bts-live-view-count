import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop({ required: true })
  adminId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  isVerified: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
