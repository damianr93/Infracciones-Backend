import { Document } from 'mongoose';

export interface Pagos extends Document {
  readonly payment_date: string;
  readonly infraction: string;
  readonly estado: string;
  readonly link_pago: string;
}
