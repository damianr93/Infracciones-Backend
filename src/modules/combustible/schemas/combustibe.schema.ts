import mongoose from "mongoose";


export const combustibleSchema = new mongoose.Schema({
    valor: Number,
    fecha_actualizacion: {
        type: String,
        default: new Date().toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }),
    },
}, {
    timestamps: true,
})


combustibleSchema.set('toJSON', {
    virtuals:true,
    versionKey:false,
    transform: function(doc, ret, options){
        delete ret._id;
    }
})