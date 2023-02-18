import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { Video, VideoSchema } from 'src/schemas/video.schema';
import { Statistic, StatisticSchema } from 'src/schemas/statistic.schema';

// Services
import { VideoService } from './video.service';
import { YoutubeApiService } from './youtube-api.service';
import { HydrateVideoService } from './hydrate-video.service';
import { StatisticService } from './statistic.service';

// Controllers
import { VideoController } from './video.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Video.name, schema: VideoSchema },
      { name: Statistic.name, schema: StatisticSchema },
    ]),
  ],
  providers: [VideoService, StatisticService, YoutubeApiService, HydrateVideoService],
  controllers: [VideoController],
})
export class VideoModule {}
