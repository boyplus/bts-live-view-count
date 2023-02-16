import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VideoDocument = Video & Document;

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

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
  thumbnails: Thumbnail[];

  @Prop({ required: true })
  currentLike: number;

  @Prop({ required: true })
  createdAt: Date;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
