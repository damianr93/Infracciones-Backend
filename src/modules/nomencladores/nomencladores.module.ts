import { Module } from '@nestjs/common';
import { NomencladoresService } from './nomencladores.service';
import { NomencladoresController } from './nomencladores.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { nomencladoresProviders } from './nomencladores.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NomencladoresController],
  providers: [...nomencladoresProviders, NomencladoresService],
})
export class NomencladoresModule {}
