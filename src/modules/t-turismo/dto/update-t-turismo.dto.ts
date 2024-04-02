import { PartialType } from "@nestjs/swagger";
import { CreateTranspTurismoDto } from "./t-turismo.dto";


export class UpdateTransporteTurismoDto extends PartialType(CreateTranspTurismoDto){}