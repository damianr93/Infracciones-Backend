import { Document } from "mongoose";

export interface TaxisRemis extends Document {
    readonly numero_legajo: string,
    readonly dominio_vehiculo: string,
    readonly numero_motor: string,
    readonly numero_chasis: string,
    readonly marca_vehiculo: string,
    readonly modelo_vehiculo: string,
    readonly nombre_titular: string,
    readonly numero_licencia_conductor: string,
    readonly nombre_conductor:string,
    readonly poliza_seguro: string,
    readonly vtv: string,
    readonly revision_salud:string,
    readonly desinfeccion_vehicular:string,
    readonly taximetro:string,
    readonly observaciones:string,
    readonly foto_vehiculo: string,
    readonly foto_titular: string,
    readonly tipo: string,
}