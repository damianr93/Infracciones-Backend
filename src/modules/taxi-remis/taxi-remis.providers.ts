import { Mongoose } from 'mongoose';
import { taxiRemisSchema } from './schema/taxi-remis.schema';


export const TaxiRemisProviders = [
  {
    provide: 'TAXI_REMIS',
    useFactory: (mongoose: Mongoose) => mongoose.model('Taxi_remis', taxiRemisSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];