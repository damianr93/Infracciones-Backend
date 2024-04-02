import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { usersProviders } from './users.providers';
import { Jwt } from 'src/services/jwt/jwt.module';
import { VersionsService } from '../versions/versions.service';
import { versionProviders } from '../versions/versions.providers';

@Module({
  imports: [DatabaseModule, Jwt],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    ...versionProviders,
    UsersService,
    VersionsService,
  ],
})
export class UsersModule {}
