import { Module } from '@nestjs/common';
import { TTurismoService } from './t-turismo.service';
import { TTurismoController } from './t-turismo.controller';
import { transporteTurismoProviders } from './t-turismo.providers';
import { DatabaseModule } from 'src/services/database/database.module';
import { usersProviders } from '../users/users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TTurismoController],
  providers: [
    ...transporteTurismoProviders,
    TTurismoService,
    ...usersProviders
  ],
})
export class TTurismoModule { }
