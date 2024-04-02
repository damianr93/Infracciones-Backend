import * as mongoose from 'mongoose';

export const InfraccionesSchema = new mongoose.Schema(
  {
    dominio: String,
    nombre_propietario: String,
    nombre_conductor: String,
    domicilio_conductor: String,
    marca_vehiculo: String,
    modelo_vehiculo: String,
    color_vehiculo: String,
    numero_licencia_conductor: String,
    ubicacion_infraccion: String,
    referencia_ubicacion: String,
    id_nomenclador: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nomencladores',
      },
    ],
    numero_infraccion: String,
    estado: {
      type: String,
      enum: ['NULO', 'PENDIENTE', 'PAGADO'],
      default: 'PENDIENTE',
    },
    juez_asignado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    foto: [String],
    creado_por: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  { timestamps: true },
);

InfraccionesSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret, options) {
    delete ret._id;
  },
});
