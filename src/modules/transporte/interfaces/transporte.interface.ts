import { Document } from 'mongoose';

export interface Transporte extends Document {
  readonly numero_legajo: String,
  readonly dominio_vehiculo: String,
  readonly numero_motor: String,
  readonly numero_chasis: String,
  readonly marca_vehiculo: String,
  readonly modelo_vehiculo: String,
  readonly nombre_titular: String,
  readonly numero_licencia_conductor: String,
  readonly nombre_conductor:String,
  readonly poliza_seguro: String,
  readonly vtv: String,
  readonly observaciones:String,
}
