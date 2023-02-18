import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Statistic, StatisticDocument } from 'src/schemas/statistic.schema';
import { VideoStatistics } from './model/video-stat';
import { YoutubeApiService } from './youtube-api.service';

@Injectable()
export class StatisticService {
  constructor(@InjectModel(Statistic.name) private readonly statisticModel: Model<StatisticDocument>) {}

  async addStatistics(statistics: VideoStatistics[]) {
    await this.statisticModel.insertMany(statistics);
  }
}
