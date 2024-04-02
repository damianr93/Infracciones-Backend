import mongoose from 'mongoose';

export const actasShema = new mongoose.Schema({
  nombre_receptor: String,
  estado: {
    type: String,
    enum: ['Recibido', 'Liberacion aprobada', 'Liberado'],
    default: 'Recibido',
  },
  fecha_recepcion: {
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
  fecha_liberacion: String,
  juez: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  infraccion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Infracciones',
  },
  corralon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'corralones',
  },
  fotos: [
    {
      type: String,
    },
  ],
});

actasShema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret, options) {
    delete ret._id;
  },
});
