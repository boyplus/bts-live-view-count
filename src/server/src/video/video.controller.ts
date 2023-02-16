import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { AddVideoRequest } from './dto/add-video-request.dto';
import { VideoService } from './video.service';

@ApiTags('video')
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @Auth()
  async addVideo(@Body() { videoId }: AddVideoRequest) {
    await this.videoService.addVideo(videoId);
  }
}
