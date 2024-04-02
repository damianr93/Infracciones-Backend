import * as mongoose from 'mongoose';

export const VersionSchema = new mongoose.Schema(
  {
    number: Number,
    uri: String,
  },
  {
    timestamps: true,
  },
);

VersionSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret, options) {
    delete ret._id;
  },
});
