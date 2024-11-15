import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SecretAccessEntity } from './secret-access.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SecretAccessService {
    constructor(
        @InjectRepository(SecretAccessEntity)
        private readonly secretAccessRepository: Repository<SecretAccessEntity>,
    ) {}

    async logAccess(userId: string) {
        if (!userId) {
            throw new HttpException(
                'User ID is not provided',
                HttpStatus.BAD_REQUEST,
            );
        }

        const secretAccess = new SecretAccessEntity();
        secretAccess.userId = userId;
        await this.secretAccessRepository.save(secretAccess);
    }
}
