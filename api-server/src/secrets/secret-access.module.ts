import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretAccessEntity } from './secret-access.entity';
import { SecretAccessService } from './secret-access.service';
import { SecretController } from './secret-access.controller';
import { AuthService } from 'src/authentication/auth.service';
import { AzureADStrategy } from 'src/authentication/strategies/entraid.strategy';
import { AuthMiddleware } from 'src/authentication/auth.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([SecretAccessEntity])],
    providers: [SecretAccessService, AzureADStrategy, AuthService],
    controllers: [SecretController],
})
export class SecretAccessModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes({ path: 'secret', method: RequestMethod.GET });
    }
}
