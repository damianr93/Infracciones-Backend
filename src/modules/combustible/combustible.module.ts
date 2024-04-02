import { Module } from '@nestjs/common';
import { CombustibleService } from './combustible.service';
import { CombustibleController } from './combustible.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { combustibleProviders } from './combustible.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CombustibleController],
  providers: [...combustibleProviders,CombustibleService],
})
export class CombustibleModule {}
