import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateInfraccioneDto } from './dto/create-infraccione.dto';
import { Infraccion } from './interfaces/infracciones.interface';
import { Model } from 'mongoose';
import { UpdateInfraccionesDto } from './dto/update-infraccione.dto';
import { Actas } from '../actas/interfaces/actas.interface';
import { Nomenclador } from '../nomencladores/interfaces/nomencladores.interface';
import { Combustible } from '../combustible/interfaces/combustible.interface';
import { MercadoPagoService } from 'src/services/mercado-pago/mercado-pago.service';
import { Pagos } from '../pagos/interfaces/pagos.interface';

@Injectable()
export class InfraccionesService {
  constructor(
    @Inject('INFRACCIONES_MODEL')
    private readonly infraccionModel: Model<Infraccion>,

    @Inject('ACTAS_MODEL')
    private readonly actasModel: Model<Actas>,

    @Inject('NOMENCLADORES_MODEL')
    private readonly nomencladoresModel: Model<Nomenclador>,

    @Inject('COMBUSTIBLE_MODEL')
    private readonly combustibleModel: Model<Combustible>,

    @Inject('PAGOS_MODEL')
    private readonly pagosModel: Model<Pagos>,

    private readonly mercadopagoService: MercadoPagoService,
  ) {}

  create(createInfraccioneDto: CreateInfraccioneDto) {
    return this.infraccionModel.create(createInfraccioneDto);
  }

  findAll(zorroId: string) {
    let query = {};
    if (zorroId) {
      query = { creado_por: zorroId };
    }
    return this.infraccionModel
      .find(query)
      .populate('juez_asignado')
      .populate('id_nomenclador')
      .exec();
  }

  async findByDomain(dominio: string) {
    if (!dominio) throw new HttpException('La patente es requerida', 400);
    return await this.infraccionModel
      .find({
        $or: [
          { dominio: new RegExp(dominio, 'i') },
          { num_infraccion: new RegExp(dominio, 'i') },
        ],
      })
      .populate('id_nomenclador');
  }

  findOne(id: string) {
    return this.infraccionModel
      .findById(id)
      .populate('juez_asignado')
      .populate('id_nomenclador')
      .exec();
  }

  async update(
    id: string,
    updateInfraccioneDto: UpdateInfraccionesDto,
    userType: string,
  ) {
    if (userType !== 'Juez') {
      throw new ForbiddenException(
        'No tienes permiso para cambiar el estado de la infraccion.',
      );
    }

    return await this.infraccionModel.findByIdAndUpdate(
      id,
      updateInfraccioneDto,
      { new: true },
    );
  }

  async cambiarEstado(id: string, updateInfraccioneDto: UpdateInfraccionesDto) {
    const newUpdate = await this.infraccionModel.findByIdAndUpdate(
      id,
      updateInfraccioneDto,
      { new: true },
    );
    const acta = await this.actasModel.findOne({ infraccion: newUpdate.id });

    if (acta === null) {
      throw new HttpException(
        'El acta aún no ha sido generada',
        HttpStatus.NOT_FOUND,
      );
    }

    if (newUpdate.estado === 'NULO' || newUpdate.estado === 'PAGADO') {
      acta.estado = 'Liberado';
    } else {
      acta.estado = 'Recibido';
    }
    acta.save();
    return newUpdate;
  }

  remove(id: string) {
    return this.infraccionModel.findByIdAndDelete(id);
  }

  async pagarInfraccion(id: string) {
    try {
      const infraccion = await this.infraccionModel.findById(id);
      const nomencladoresAsociados = await this.nomencladoresModel.find({
        _id: { $in: infraccion.id_nomenclador },
      });
      const montoTotal = nomencladoresAsociados.reduce(
        (acc, curr) => acc + curr.unidades_de_valor,
        0,
      );
      const valorCombustible = await this.combustibleModel.findOne();
      const description = nomencladoresAsociados
        .map((nomenclador) => nomenclador.nombre)
        .join(', ');
      const mpLinkl: any = await this.mercadopagoService.createPaymentLink({
        description,
        amount: parseFloat((montoTotal * valorCombustible.valor).toFixed(2)),
        infraccionId: id,
      });
      const pago = await this.pagosModel.findOne({ infraction: id });

      if (pago) {
        await this.pagosModel.findOneAndUpdate(
          { infraction: id },
          { link_pago: mpLinkl.data.init_point },
        );
      } else {
        await this.pagosModel.create({
          infraction: id,
          link_pago: mpLinkl.data.init_point,
        });
      }
      return mpLinkl.data.init_point as string;
    } catch (error) {
      console.log('🚀 ~ InfraccionesService ~ pagarInfraccion ~ error:', error);
      throw new HttpException(
        'Error al intentar pagar la infracción',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByNumInfraccion(numInfraccion: string) {
    const infra = await this.infraccionModel.findOne({
      numero_infraccion: numInfraccion,
    });
    return infra;
  }
}
