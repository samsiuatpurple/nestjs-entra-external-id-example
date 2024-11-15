import { Controller, Get } from '@nestjs/common';
import { SecretAccessService } from './secret-access.service';
import { User } from 'src/authentication/user.decorator';
import { SecretDto } from './dto/secret.dto';

@Controller('secret')
export class SecretController {
    constructor(private readonly secretAccessService: SecretAccessService) {}

    @Get()
    async getSecret(@User() user): Promise<SecretDto> {
        await this.secretAccessService.logAccess(user?.oid);
        return { message: 'secret' };
    }
}
