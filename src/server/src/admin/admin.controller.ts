import { Controller, Get } from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Auth()
  @Get('waiting-verify')
  async getWaitingVerification() {
    const admins = await this.adminService.findWaitingVerifiedAdmin();
    return admins;
  }
}
