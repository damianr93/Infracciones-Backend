import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly tipo: string;
  readonly nombre_hotel: string;
}
