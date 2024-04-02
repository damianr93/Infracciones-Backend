import { Document } from 'mongoose';

export interface Version extends Document {
  readonly number: number;
  readonly uri: string;
}
