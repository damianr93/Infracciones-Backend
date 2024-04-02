import * as mongoose from 'mongoose';

export const PagosSchema = new mongoose.Schema(
  {
    infraction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Infracciones',
      unique: true,
    },
    estado: {
      type: String,
      default: 'Pendiente',
    },
    link_pago: {
      type: String,
    },
  },
  { timestamps: true },
);

PagosSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
