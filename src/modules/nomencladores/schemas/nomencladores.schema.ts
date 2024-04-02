import * as mongoose from 'mongoose';

export const NomencladorSchema = new mongoose.Schema({
  nombre: String,
  unidades_de_valor: Number,
});


NomencladorSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret, options){
      delete ret._id;
  }
})