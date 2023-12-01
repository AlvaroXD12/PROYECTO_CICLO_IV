import { Parametros } from "./Parametros";
import { Proyecto } from "./Proyecto";

export class Actividad_ejecu {
    idp?: number;
    nombre_actividad?: string;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    descripcion?: string;
    proyecto?: Proyecto;
    parametros?: Parametros;
}