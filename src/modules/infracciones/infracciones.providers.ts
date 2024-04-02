import { Mongoose } from 'mongoose';
import { InfraccionesSchema } from './schemas/infracciones.schema';

export const infraccionesProviders = [
  {
    provide: 'INFRACCIONES_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Infracciones', InfraccionesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
