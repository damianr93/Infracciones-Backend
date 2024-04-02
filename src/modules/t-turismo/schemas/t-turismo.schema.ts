import * as mongoose from 'mongoose';


export const transporteTurismoSchema = new mongoose.Schema({
  nombre_empresa: String,
  marca_vehiculo: String,
  dominio_vehiculo: String,
  nombre_conductores:String,
  fecha_hora_ingreso: String,
  fecha_hora_egreso: String,
  creado_por: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  ruta_ingreso: String,
  ruta_egreso: String,
  estado: {
    type:String,
    default: 'Pendiente Revision'
  },
  otra_informacion:String,
  observaciones: String,
}, { timestamps: true });


transporteTurismoSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret, options){
      delete ret._id;
  }
})
