import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { InfraccionesModule } from './modules/infracciones/infracciones.module';
import { CorralonesModule } from './modules/corralones/corralones.module';
import { CombustibleModule } from './modules/combustible/combustible.module';
import { NomencladoresModule } from './modules/nomencladores/nomencladores.module';
import { ActasModule } from './modules/actas/actas.module';
import { NotificacionesModule } from './modules/notificaciones/notificaciones.module';
import { PagosModule } from './modules/pagos/pagos.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { MyLogger } from './services/logger/logger';
import { TaxiRemisModule } from './modules/taxi-remis/taxi-remis.module';
import { TransporteModule } from './modules/transporte/transporte.module';
import { TTurismoModule } from './modules/t-turismo/t-turismo.module';
import { Jwt } from './services/jwt/jwt.module';
import { JwtAuthGuard } from './services/jwt/jwt.guard';
import { JwtStrategy } from './services/jwt/jwt.strategy';
import { AwsModule } from './modules/aws/aws.module';
import { VersionsModule } from './modules/versions/versions.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    UsersModule,
    InfraccionesModule,
    CorralonesModule,
    CombustibleModule,
    NomencladoresModule,
    ActasModule,
    NotificacionesModule,
    PagosModule,
    TaxiRemisModule,
    TransporteModule,
    TTurismoModule,
    Jwt,
    AwsModule,
    VersionsModule
  ],
  controllers: [AppController],
  providers: [MyLogger, AppService, JwtAuthGuard, JwtStrategy],
})
export class AppModule {}
