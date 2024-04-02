import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  CORS_ORIGIN: get('CORS_ORIGIN').required().asString(),
  JWT_SECTRET: get('JWT_SECTRET').required().asString(),
  AWS_REGION: get('AWS_REGION').required().asString(),
  AWS_ACCESS_KEY_ID: get('AWS_ACCESS_KEY_ID').required().asString(),
  AWS_SECRET_ACCESS_KEY: get('AWS_SECRET_ACCESS_KEY').required().asString(),
  MONGO_URI: get('MONGO_URI').required().asString(),
  MERCADO_PAGO_ACCESS_TOKEN: get('MERCADO_PAGO_ACCESS_TOKEN')
    .required()
    .asString(),
  MERCADO_PAGO_CLIENT_ID: get('MERCADO_PAGO_CLIENT_ID').required().asString(),
  MERCADO_PAGO_CLIENT_SECRET: get('MERCADO_PAGO_CLIENT_SECRET')
    .required()
    .asString(),
};
