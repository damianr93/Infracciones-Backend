import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { DatabaseModule } from 'src/services/database/database.module';
import { pagosProviders } from './pagos.providers';
import { MercadoPagoService } from 'src/services/mercado-pago/mercado-pago.service';
import { infraccionesProviders } from '../infracciones/infracciones.providers';
import { MyLogger } from 'src/services/logger/logger';

@Module({
  imports: [DatabaseModule],
  controllers: [PagosController],
  providers: [
    ...pagosProviders,
    PagosService,
    MercadoPagoService,
    ...infraccionesProviders,
    MyLogger,
  ],
})
export class PagosModule {}
