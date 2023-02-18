import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Thumbnail {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;
}

@Schema()
export class Thumbnails {
  @Prop({ required: true })
  default: Thumbnail;

  @Prop()
  medium: Thumbnail;

  @Prop()
  high: Thumbnail;

  @Prop()
  standard: Thumbnail;

  @Prop()
  maxres: Thumbnail;
}
