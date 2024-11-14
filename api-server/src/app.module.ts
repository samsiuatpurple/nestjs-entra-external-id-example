import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import {
  AzureADStrategy,
  AzureADStrategyName,
} from './authentication/strategies/entraid.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './app-datasource';
import { SecretsModule } from './secrets/secrets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dbConfig),
    PassportModule.register({
      defaultStrategy: AzureADStrategyName,
    }),
    SecretsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AzureADStrategy],
})
export class AppModule {}
