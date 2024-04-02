import { PartialType } from "@nestjs/swagger";
import { CreateTransporteDto } from "./create-transporte.dto";


export class UpdateTranporteDto extends PartialType(CreateTransporteDto){}