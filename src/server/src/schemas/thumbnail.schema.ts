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

  @Prop({ required: true })
  medium: Thumbnail;

  @Prop({ required: true })
  high: Thumbnail;

  @Prop({ required: true })
  standard: Thumbnail;

  @Prop({ required: true })
  maxres: Thumbnail;
}
