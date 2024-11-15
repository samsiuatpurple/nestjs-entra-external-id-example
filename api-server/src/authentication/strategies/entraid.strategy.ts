import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';
import { ConfigService } from '@nestjs/config';

export const AzureADStrategyName = 'AzureADStrategy';

@Injectable()
export class AzureADStrategy extends PassportStrategy(
    BearerStrategy,
    AzureADStrategyName,
) {
    constructor(protected readonly configService: ConfigService) {
        super({
            identityMetadata: `https://${configService.get('AZURE_ENTRA_SUB_DOMAIN')}.ciamlogin.com/${configService.get('AZURE_TENANT_ID')}/v2.0/.well-known/openid-configuration`,
            clientID: configService.get('AZURE_ENTRA_CLIENT_ID'), // Replace with your Application (Client) ID
            validateIssuer: true,
            passReqToCallback: false,
            loggingLevel: 'info',
        });
    }

    validate(payload: any) {
        return payload;
    }
}
