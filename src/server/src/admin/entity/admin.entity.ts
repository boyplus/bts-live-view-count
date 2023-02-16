import { ApiProperty } from '@nestjs/swagger';

export class Admin {
  @ApiProperty()
  email: string;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  picture: string;
}
