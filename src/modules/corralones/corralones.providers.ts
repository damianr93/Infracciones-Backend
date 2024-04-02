import { Mongoose } from "mongoose";
import { corralonesSchema } from "./schemas/corralones.schema";


export const corralonesProviders = [
    {
        provide: 'CORRALONES_MODEL',
        useFactory: (mongoose: Mongoose) =>
            mongoose.model('corralones', corralonesSchema),
        inject: ['DATABASE_CONNECTION']
    },

];