import mongoose from "mongoose";

export const corralonesSchema = new mongoose.Schema({
    nombre:String,
    ubicacion:String
})

corralonesSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret, options){
        delete ret._id;
    }
  })