import { Module } from '@nestjs/common';
import { TransporteController } from './transporte.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { transporteProviders } from './transporte.providers';
import { TransporteService } from './transporte.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TransporteController],
  providers: [...transporteProviders ,TransporteService],
})
export class TransporteModule {}
