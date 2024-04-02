import { Mongoose } from "mongoose";
import { combustibleSchema } from './schemas/combustibe.schema';

export const combustibleProviders = [
    {
        provide: 'COMBUSTIBLE_MODEL',
        useFactory:(mongoose:Mongoose) => mongoose.model('Combustible', combustibleSchema),
        inject:['DATABASE_CONNECTION']
    }
]