import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/decorators/auth.decorator';
import { AdminService } from './admin.service';
import { Admin } from './entity/admin.entity';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Auth()
  @Get('waiting-verify')
  @ApiOkResponse({ type: Admin, isArray: true })
  async getWaitingVerification() {
    const admins = await this.adminService.findWaitingVerifiedAdmin();
    return admins;
  }
}
