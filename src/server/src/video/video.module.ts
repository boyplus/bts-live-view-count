import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Video, VideoSchema } from 'src/schemas/video.schema';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
