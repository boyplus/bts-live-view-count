import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Statistic, StatisticDocument } from 'src/schemas/statistic';
import { YoutubeApiService } from './youtube-api.service';

@Injectable()
export class StatisticService {
  constructor(
    private readonly youtubeApiService: YoutubeApiService,
    @InjectModel(Statistic.name) private readonly statisticModel: Model<StatisticDocument>,
  ) {}
}
