import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

export function Auth() {
  return applyDecorators(UseGuards(JwtAuthGuard), ApiUnauthorizedResponse({ description: 'Unauthorized' }));
}
