import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Thumbnails } from './thumbnail.schema';

export type VideoDocument = Video & Document;

@Schema({
  timeseries: {
    timeField: 'timestamp',
    metaField: 'test',
    granularity: 'minutes',
  },
})
export class Video {
  @Prop({ required: true, index: true })
  videoId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  currentView: number;

  @Prop({ required: true })
  currentLike: number;

  @Prop({ required: true })
  thumbnails: Thumbnails;

  @Prop({ required: true })
  timeStamp: Date;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
