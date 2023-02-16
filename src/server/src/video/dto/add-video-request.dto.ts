import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddVideoRequest {
  @ApiProperty()
  @IsString()
  videoId: string;
}
