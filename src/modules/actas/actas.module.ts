import { Module } from '@nestjs/common';
import { ActasService } from './actas.service';
import { ActasController } from './actas.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { actasProviders } from './actas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ActasController],
  providers: [...actasProviders ,ActasService],
})
export class ActasModule {}
