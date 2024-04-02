import { PartialType } from "@nestjs/swagger";
import { CreateInfraccioneDto } from "./create-infraccione.dto";


export class UpdateInfraccionesDto extends PartialType(CreateInfraccioneDto){}