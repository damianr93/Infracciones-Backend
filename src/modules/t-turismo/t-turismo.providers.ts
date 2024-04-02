import { Mongoose } from 'mongoose';
import { transporteTurismoSchema } from './schemas/t-turismo.schema';


export const transporteTurismoProviders = [
  {
    provide: 'TRANSPORTE_TURISMO',
    useFactory: (mongoose: Mongoose) => mongoose.model('Transporte_turismo', transporteTurismoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];