import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatisticDocument = Statistic & Document;

@Schema({
  timeseries: {
    timeField: 'timeStamp',
    metaField: 'videoId',
    granularity: 'minutes',
  },
})
export class Statistic {
  @Prop({ required: true, index: true })
  videoId: string;

  @Prop({ required: true })
  currentView: number;

  @Prop({ required: true })
  currentLike: number;

  @Prop({ required: true })
  currentComment: number;

  @Prop({ required: true })
  timestamp: Date;
}

export const StatisticSchema = SchemaFactory.createForClass(Statistic);
