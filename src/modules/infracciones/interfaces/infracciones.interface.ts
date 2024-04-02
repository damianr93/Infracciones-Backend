import { Document } from 'mongoose';

export interface Infraccion extends Document {
  readonly dominio: string;
  readonly nombre_propietario: string;
  readonly nombre_conductor: string;
  readonly domicilio_conductor: string;
  readonly marca_vehiculo: string;
  readonly modelo_vehiculo: string;
  readonly color_vehiculo: string;
  readonly numero_licencia_conductor: string;
  readonly ubicacion_infraccion: string;
  readonly referencia_ubicacion: string;
  readonly id_nomenclador: any;
  nomencladores: any;
  readonly numero_infraccion: string;
  readonly estado: string;
  readonly juez_asignado: string;
  readonly foto: string[];
}
