import { Document } from 'mongoose';

export interface Nomenclador extends Document {
  readonly nombre: string;
  readonly unidades_de_valor: number;
}
