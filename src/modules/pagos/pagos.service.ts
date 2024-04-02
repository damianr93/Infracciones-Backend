import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { Model } from 'mongoose';
import { Pagos } from './interfaces/pagos.interface';
import { MercadoPagoService } from 'src/services/mercado-pago/mercado-pago.service';
import { Infraccion } from '../infracciones/interfaces/infracciones.interface';

@Injectable()
export class PagosService {
  constructor(
    @Inject('PAGOS_MODEL') private readonly pagosModel: Model<Pagos>,
    private readonly mercadopagoService: MercadoPagoService,
    @Inject('INFRACCIONES_MODEL')
    private readonly infraccionModel: Model<Infraccion>,
  ) {}

  async create(createPagoDto: CreatePagoDto) {
    const { infraction } = createPagoDto;

    const infractionExist = await this.pagosModel.findOne({ infraction });
    if (infractionExist) {
      throw new HttpException(
        { message: 'Infraction already exists' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.pagosModel.create(createPagoDto);
  }

  findAll() {
    return this.pagosModel.find().populate('infraction').exec();
  }

  findOne(id: string) {
    return this.pagosModel.findOne({ _id: id }).exec();
  }

  update(id: string, updatePagoDto: Partial<CreatePagoDto>) {
    return this.pagosModel.findOneAndUpdate({ _id: id }, updatePagoDto).exec();
  }

  remove(id: string) {
    return this.pagosModel.deleteOne({ _id: id }).exec();
  }

  async mercadoPagoWebhook(body: any) {
    console.log('🚀 PaymentsService ~ mercadoPagoWebhook ~ body:', body);
    if (body.type === 'payment') {
      const paymentData: any = await this.mercadopagoService.getAxiosPayment(
        body.data.id.toString(),
      );
      const paymentStatus = `${paymentData.status} - ${paymentData.status_detail}`;

      if (body.action === 'payment.created') {
        if (paymentStatus === 'approved - accredited') {
          await this.pagosModel.findOneAndUpdate(
            { infraction: paymentData.external_reference },
            {
              status: 'Pagado',
            },
          );
          await this.infraccionModel.findOneAndUpdate(
            { _id: paymentData.external_reference },
            {
              status: 'Pagado',
            },
          );
        }
      }
    }

    return { status: 'ok' };
  }
}
