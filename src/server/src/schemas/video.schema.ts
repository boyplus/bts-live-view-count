import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Thumbnails } from './thumbnail.schema';

export type VideoDocument = Video & Document;

@Schema({ timestamps: true })
export class Video {
  @Prop({ required: true, index: true })
  videoId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  publishedAt: Date;

  @Prop({ required: true })
  currentView: number;

  @Prop({ required: true })
  currentLike: number;

  @Prop({ required: true })
  currentComment: number;

  @Prop({ required: true })
  oldView: number;

  @Prop({ required: true })
  oldLike: number;

  @Prop({ required: true })
  oldComment: number;

  @Prop({ required: true })
  thumbnails: Thumbnails;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
