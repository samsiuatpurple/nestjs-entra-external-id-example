import { Injectable } from '@nestjs/common';
import { AzureADStrategy } from './strategies/entraid.strategy';

@Injectable()
export class AuthService {
    constructor(private readonly azureADStrategy: AzureADStrategy) {}

    getAzureAdStrategy() {
        return this.azureADStrategy;
    }
}
