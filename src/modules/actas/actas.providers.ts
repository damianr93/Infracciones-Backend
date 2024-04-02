import { Mongoose } from 'mongoose';
import { actasShema } from './schema/actas.schema';



export const actasProviders = [
    {
        provide: 'ACTAS_MODEL',
        useFactory: (mongoose: Mongoose) =>
            mongoose.model('Actas', actasShema),
        inject: ['DATABASE_CONNECTION'],
    }
];