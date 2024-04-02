import * as mongoose from 'mongoose';


export const transporteSchema = new mongoose.Schema({
  numero_legajo: String,
  dominio_vehiculo: String,
  numero_motor: String,
  numero_chasis: String,
  marca_vehiculo: String,
  modelo_vehiculo: String,
  nombre_titular: String,
  numero_licencia_conductor: String,
  nombre_conductor:String,
  poliza_seguro: String,
  vtv: {
    type: String,
    enum: ['Vencida', 'Vigente'],
    default: 'Vigente'
  },
  tipo_transporte: {
    type: String,
    enum: ['Carga-Descarga', 'Aridos'],
  },
  observaciones:String,
}, {timestamps: true});


transporteSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret, options){
      delete ret._id;
  }
})
