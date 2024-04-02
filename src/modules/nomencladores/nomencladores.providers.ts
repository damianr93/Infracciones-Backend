import { Mongoose } from 'mongoose';
import { NomencladorSchema } from './schemas/nomencladores.schema';

export const nomencladoresProviders = [
  {
    provide: 'NOMENCLADORES_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Nomencladores', NomencladorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
