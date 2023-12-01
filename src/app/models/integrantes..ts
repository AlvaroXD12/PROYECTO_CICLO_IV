import { Curso_Arti_Estu } from './Curso_arti_estu';
import { Parametros } from './Parametros';
import { Roles } from './Roles';
import { Cursoarticulado } from './cursoaarticu';

export class Integrantes{
  id?: number;
  cursoarticulado?: Cursoarticulado;
  curso_arti_estu?: Curso_Arti_Estu;
  parametros?: Parametros;
  roles?: Roles;
}
