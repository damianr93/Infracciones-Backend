import mongoose from "mongoose";


export const taxiRemisSchema = new mongoose.Schema({
    numero_legajo: String,
    dominio_vehiculo: String,
    numero_motor: String,
    numero_chasis: String,
    marca_vehiculo: String,
    modelo_vehiculo: String,
    foto_vehiculo: String,
    nombre_titular: String,
    numero_licencia_conductor: String,
    nombre_conductor:String,
    foto_titular: String,
    poliza_seguro: String,
    vtv: {
      type: String,
      enum: ['Vencida', 'Vigente'],
      default: 'Vigente'
    },
    revision_salud:{
        type: String,
        enum: ['Vigente', 'Pendiente'],
        default: 'Vigente'
    },
    desinfeccion_vehicular:{
        type: String,
        enum: ['Regular', 'Pendiente'],
        default: 'Regular'
    },
    taximetro:{
        type: String,
        enum: ['En condiciones', 'Novedades'],
        default: 'En condiciones'
    },
    tipo: {
        type: String,
        enum: ['Remis', 'Taxi'],
    },
    observaciones:String,
}, { timestamps: true })

taxiRemisSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret, options){
        delete ret._id;
    }
  })