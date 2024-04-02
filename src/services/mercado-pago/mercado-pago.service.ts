import { ConflictException, Injectable } from '@nestjs/common';
import { MyLogger } from 'src/services/logger/logger';
import { envs } from 'src/config/envs';
import axios from 'axios';

@Injectable()
export class MercadoPagoService {
  constructor(private readonly logger: MyLogger) {}

  // async createPaymentLink(owner: Partial<User>, datosPago: newPago): Promise<PreferenceGetResponse> {
  //   if(!owner.mercadoPagoToken) throw new ConflictException('Owner of field has no token for using card as guarantee');
  //   mercadopago.configure({
  //     access_token: owner.mercadoPagoToken ,
  //   });

  //   const preference: CreatePreferencePayload = {
  //     items: [
  //       {
  //         title: datosPago.title,
  //         quantity: 1,
  //         currency_id: 'ARS',
  //         unit_price: parseFloat(datosPago.amount.toString()),
  //       },
  //     ],
  //     payer: {
  //       email: datosPago.email,
  //     },
  //     back_urls: {
  //       success: `${process.env.NODE_ENV}/appointment/confirm/SOME_ID`,
  //       failure: 'https://www.tu-pagina.com/pago-fallido',
  //       pending: 'https://www.tu-pagina.com/pago-pendiente',
  //     },
  //     auto_return: 'approved',
  //   };

  //   const response = await mercadopago.preferences.create(preference);
  //   const url = await mercadopago.preferences.get(response.body.id);
  //   return url;
  // }

  async getBearerToken(): Promise<string> {
    const clientId = envs.MERCADO_PAGO_CLIENT_ID;
    const clientSecret = envs.MERCADO_PAGO_CLIENT_SECRET;
    const url = 'https://api.mercadopago.com/oauth/token';
    const response = await axios.post(url, {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    });
    return response.data.access_token;
  }

  async getAxiosPayment(paymentId: string): Promise<unknown> {
    //TODO: get bearer with client id and secret from owner
    const bearerToken = await this.getBearerToken();
    const paymentData = await axios.get(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    );
    return paymentData.data;
  }

  // async updatePayment(
  //   payload: UpdatePaymentPayload,
  //   owner: Partial<User>,
  // ): Promise<PaymentUpdateResponse> {
  //   if (!owner.mercadoPagoToken)
  //     throw new ConflictException(
  //       'Owner of field has no token for this action',
  //     );
  //   mercadopago.configure({
  //     access_token: owner.mercadoPagoToken,
  //   });
  //   return await mercadopago.payment.update(payload);
  // }

  // async capturePayment(
  //   paymentId: string,
  //   owner: Partial<User>,
  // ): Promise<PaymentUpdateResponse> {
  //   try {
  //     mercadopago.configure({
  //       access_token: owner.mercadoPagoToken,
  //     });
  //     return await mercadopago.payment.capture(+paymentId);
  //   } catch (error) {
  //     this.logger.error(error);
  //     return error;
  //   }
  // }

  // async cancelPayment(
  //   paymentId: string,
  //   owner: Partial<User>,
  // ): Promise<PaymentUpdateResponse> {
  //   if (!owner.mercadoPagoToken)
  //     throw new ConflictException(
  //       'Owner of field has no token for canceling payment',
  //     );
  //   mercadopago.configure({
  //     access_token: owner.mercadoPagoToken,
  //   });
  //   const cancelStatus = await mercadopago.payment.cancel(+paymentId);
  //   this.logger.log(
  //     `Payment canceled: ${cancelStatus.body.id} | status: ${cancelStatus.body.status} | status_detail: ${cancelStatus.body.status_detail}`,
  //     'MercadoPagoService',
  //   );
  //   return cancelStatus;
  // }

  // async refundPayment(
  //   paymentId: string,
  //   owner: Partial<User>,
  // ): Promise<PaymentUpdateResponse> {
  //   if (!owner.mercadoPagoToken)
  //     throw new ConflictException(
  //       'Owner of field has no token for using card as guarantee',
  //     );
  //   mercadopago.configure({
  //     access_token: owner.mercadoPagoToken,
  //   });
  //   return await mercadopago.payment.refund(+paymentId);
  // }

  // async refundPartialPayment(
  //   paymentId: string,
  //   amount: number,
  //   owner: Partial<User>,
  // ): Promise<PaymentUpdateResponse> {
  //   if (!owner.mercadoPagoToken)
  //     throw new ConflictException(
  //       'Owner of field has no token for using card as guarantee',
  //     );
  //   mercadopago.configure({
  //     access_token: owner.mercadoPagoToken,
  //   });
  //   return await mercadopago.payment.refundPartial({
  //     payment_id: +paymentId,
  //     amount: +amount,
  //   });
  // }

  async createPaymentLink(datosPago: {
    description: string;
    amount: number;
    infraccionId: string;
  }): Promise<unknown> {
    const token = await this.getBearerToken();
    const randId = Math.floor(Math.random() * 1000000);
    try {
      return await axios.post(
        'https://api.mercadopago.com/checkout/preferences',
        {
          items: [
            {
              id: randId,
              title: `INFRACCION DE TRANSITO (${datosPago.description})`,
              description: datosPago.description,
              quantity: 1,
              unit_price: datosPago.amount,
              warranty: false,
            },
          ],
          external_reference: datosPago.infraccionId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
