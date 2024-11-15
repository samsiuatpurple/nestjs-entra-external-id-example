import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as passport from 'passport';
import { AzureADStrategyName } from './strategies/entraid.strategy';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {
        passport.use(this.authService.getAzureAdStrategy());
    }

    use(req: any, res: any, next: () => void) {
        passport.authenticate(AzureADStrategyName, { session: false })(
            req,
            res,
            next,
        );
    }
}
