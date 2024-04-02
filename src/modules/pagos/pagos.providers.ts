import { Mongoose } from 'mongoose';
import { PagosSchema } from './schema/pagos.schema';

export const pagosProviders = [
  {
    provide: 'PAGOS_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Pagos', PagosSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
