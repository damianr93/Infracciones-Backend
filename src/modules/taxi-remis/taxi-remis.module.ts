import { Module } from '@nestjs/common';
import { TaxiRemisService } from './taxi-remis.service';
import { TaxiRemisController } from './taxi-remis.controller';
import { TaxiRemisProviders } from './taxi-remis.providers';
import { DatabaseModule } from 'src/services/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [TaxiRemisController],
  providers: [...TaxiRemisProviders,TaxiRemisService],
})
export class TaxiRemisModule {}
