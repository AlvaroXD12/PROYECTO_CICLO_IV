import { Parametros } from "./Parametros";
import { Proyecto } from "./Proyecto";

export class Roles {
    id?: number;
    funcion?: string;
    horas?: number;
    nota?: number;
    parametros?:Parametros;
    proyecto?:Proyecto;
    
}