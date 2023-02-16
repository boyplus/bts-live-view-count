import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/entity/admin.entity';
import { AuthService } from './auth.service';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly adminService: AdminService,
    private readonly configService: ConfigService,
  ) {}

  @Get('google')
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req, @Res() res) {
    const { user } = req;
    // Find the existing admin
    const admin = await this.adminService.findByEmail(user.email);

    // If admin does not exist, create new account
    const frontendUrl = this.configService.get<string>('REDIRECTED_FRONTEND_URL');

    if (!admin) {
      await this.adminService.createAdmin(user.id, user.email, user.firstname, user.lastname, user.picture);
      res.redirect(`${frontendUrl}/verify`);
      return;
    }

    // If admin is not verified, redirect to verification page
    if (!admin.isVerified) {
      res.redirect(`${frontendUrl}/verify`);
      return;
    }

    // Otherwise, generate token for admin
    const token = await this.authService.signIn(user);

    res.cookie('access_token', token, {
      maxAge: 2592000000,
      sameSite: true,
      secure: false,
    });
    res.redirect(`${frontendUrl}/profile`);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOkResponse({ type: Admin })
  profile(@Req() req): Admin {
    const { email, firstname, lastname, picture } = req.user;
    return { email, firstname, lastname, picture };
  }
}
