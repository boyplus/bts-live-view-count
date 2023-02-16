import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VideoDocument = Video & Document;

@Schema()
export class Video {
  @Prop({ required: true })
  videoId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  oldView: number;

  @Prop({ required: true })
  oldLike: number;

  @Prop({ required: true })
  currentView: number;

  @Prop({ required: true })
  currentLike: number;

  @Prop({ required: true })
  createdAt: Date;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
