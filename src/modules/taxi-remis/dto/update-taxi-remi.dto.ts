import { PartialType } from "@nestjs/swagger";
import { CreateTaxiRemisDto } from "./create-taxi-remi.dto copy";




export class UpdateTaxiRemisDto extends PartialType(CreateTaxiRemisDto){}

