import { Ciclo } from "./Ciclo";
import { Coordinador } from "./Coordinador";
import { Documento } from "./documento";
import { Escu_prof } from "./Escu_prof";
import { Modalidad } from "./Modalidad";
import { Parametros } from "./Parametros";
import { Tip_proyec } from "./Tip_proyect";


export class Proyecto {
    id?: number;
    nombre_proyecto?: string;
    beneficiarios?: string;
    descripcion?: string;
    fecha_ini?: Date;
    fecha_fin?: Date;
    objetivos?: string;
    estado?: string;
    presupuesto?: Float32List;
    documento?: Documento;
    parametros?: Parametros;
    escu_prof?: Escu_prof;
    ciclo?: Ciclo;
    coordinador?: Coordinador;
    modalidad?: Modalidad
    tip_proyec?: Tip_proyec;
    nacuerdo?:number;
    proyecto?:Proyecto;
    
}