import { Module } from '@nestjs/common';
import { VersionsService } from './versions.service';
import { VersionsController } from './versions.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { versionProviders } from './versions.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [VersionsController],
  providers: [...versionProviders, VersionsService],
})
export class VersionsModule {}
