import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import {
    AzureADStrategy,
    AzureADStrategyName,
} from './authentication/strategies/entraid.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './database-config';
import { SecretAccessModule } from './secrets/secret-access.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({ ...dbConfig, autoLoadEntities: true }),
        PassportModule.register({
            defaultStrategy: AzureADStrategyName,
        }),
        SecretAccessModule,
    ],
    controllers: [AppController],
    providers: [AppService, AzureADStrategy],
})
export class AppModule {}
