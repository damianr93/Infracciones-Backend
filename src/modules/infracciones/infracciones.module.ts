import { Module } from '@nestjs/common';
import { InfraccionesService } from './infracciones.service';
import { InfraccionesController } from './infracciones.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { infraccionesProviders } from './infracciones.providers';
import { actasProviders } from '../actas/actas.providers';
import { MercadoPagoService } from 'src/services/mercado-pago/mercado-pago.service';
import { MyLogger } from 'src/services/logger/logger';
import { nomencladoresProviders } from '../nomencladores/nomencladores.providers';
import { combustibleProviders } from '../combustible/combustible.providers';
import { pagosProviders } from '../pagos/pagos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [InfraccionesController],
  providers: [
    ...infraccionesProviders,
    ...actasProviders,
    InfraccionesService,
    MercadoPagoService,
    MyLogger,
    ...nomencladoresProviders,
    ...combustibleProviders,
    ...pagosProviders,
  ],
})
export class InfraccionesModule {}
