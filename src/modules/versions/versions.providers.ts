import { Mongoose } from 'mongoose';
import { VersionSchema } from './schemas/versions.schema';

export const versionProviders = [
  {
    provide: 'VERSION_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Version', VersionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
