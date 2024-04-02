import { Mongoose } from 'mongoose';
import { transporteSchema } from './schemas/transporte.schema';

export const transporteProviders = [
  {
    provide: 'TRANSPORTE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Transporte', transporteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];