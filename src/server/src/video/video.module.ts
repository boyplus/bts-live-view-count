import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { Video, VideoSchema } from 'src/schemas/video.schema';

// Services
import { VideoService } from './video.service';
import { YoutubeApiService } from './youtube-api.service';

// Controllers
import { VideoController } from './video.controller';
import { HydrateVideoService } from './hydrate-video.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])],
  providers: [VideoService, YoutubeApiService, HydrateVideoService],
  controllers: [VideoController],
})
export class VideoModule {}
