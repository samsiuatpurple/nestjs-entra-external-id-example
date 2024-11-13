import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import {
  AzureADStrategy,
  AzureADStrategyName,
} from './authentication/strategies/entraid.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PassportModule.register({
      defaultStrategy: AzureADStrategyName,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AzureADStrategy],
})
export class AppModule {}
