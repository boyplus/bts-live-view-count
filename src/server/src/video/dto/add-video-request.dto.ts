import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AddVideoRequest {
  @ApiProperty()
  @IsString()
  videoId: string;

  @ApiProperty()
  @Optional()
  @IsOptional()
  customTitle: string | undefined;
}
