import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AzureADStrategyName } from './authentication/strategies/entraid.strategy';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('unprotected')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard(AzureADStrategyName))
  @Get('protected')
  getProtected(): ProtectedDto {
    return { message: 'protected' };
  }
}

type ProtectedDto = {
  message: string;
};
