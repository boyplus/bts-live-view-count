import { ApiProperty } from '@nestjs/swagger';

export class Thumbnail {
  @ApiProperty()
  url: string;

  @ApiProperty()
  width: number;

  @ApiProperty()
  height: number;
}

export class Thumbnails {
  @ApiProperty({ type: Thumbnail })
  default: Thumbnail;

  @ApiProperty({ type: Thumbnail })
  medium: Thumbnail;

  @ApiProperty({ type: Thumbnail })
  high: Thumbnail;

  @ApiProperty({ type: Thumbnail })
  standard: Thumbnail;

  @ApiProperty({ type: Thumbnail })
  maxres: Thumbnail;
}

export class Video {
  @ApiProperty()
  videoId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  currentView: number;

  @ApiProperty()
  currentLike: number;

  @ApiProperty()
  oldView: number;

  @ApiProperty()
  oldLike: number;

  @ApiProperty({ type: Thumbnails })
  thumbnails: Thumbnails;
}
