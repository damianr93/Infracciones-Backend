import { Document } from 'mongoose';

export interface TransporteTurismo extends Document {

  readonly nombre_empresa: string,
  readonly marca_vehiculo: string,
  readonly dominio_vehiculo: string,
  readonly nombre_conductores: string,
  readonly fecha_hora_ingreso: string,
  readonly fecha_hora_egreso: string,
  readonly creado_por: string;
  readonly ruta_ingreso: string;
  readonly ruta_egreso: string;
  readonly estado: string;
  readonly otra_informacion:string;
  readonly observaciones: string;
}


