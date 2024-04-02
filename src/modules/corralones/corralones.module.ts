import { Module } from '@nestjs/common';
import { CorralonesService } from './corralones.service';
import { CorralonesController } from './corralones.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { corralonesProviders } from './corralones.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CorralonesController],
  providers: [...corralonesProviders,CorralonesService],
})
export class CorralonesModule {}
