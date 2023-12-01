import { Integrantes } from './integrantes.';
import { Actividad_ejecu } from "./Actividad_ejecu";

export class Grupo{
  id?: number;
  nombre_grupo?: string;
  actividad_ejecu?: Actividad_ejecu;
  integrantes?: Integrantes;
}
