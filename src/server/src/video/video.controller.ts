import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { AddVideoRequest } from './dto/add-video-request.dto';
import { VideoService } from './video.service';

import { Video } from './entity/video.entity';

@ApiTags('video')
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @Auth()
  async addVideo(@Body() { videoId, customTitle }: AddVideoRequest) {
    await this.videoService.addVideo(videoId, customTitle);
  }

  @Get()
  @ApiOkResponse({ type: Video, isArray: true })
  async getVideos(): Promise<Video[]> {
    const videos = await this.videoService.getVideos();
    return videos;
  }

  @Get('preview/:id')
  @Auth()
  @ApiOkResponse({ type: Video })
  async getVideoPreviewDetail(@Param('id') id: string): Promise<Video> {
    const videoDetail = await this.videoService.getVideoDetail(id);
    return videoDetail;
  }

  @Delete(':id')
  @Auth()
  async deleteVideo(@Param('id') id: string) {
    await this.videoService.deleteVideo(id);
  }

  @Patch()
  @Auth()
  async updateVideosFromYoutubeApi() {
    await this.videoService.updateVideosFromYoutubeApi();
  }
}
