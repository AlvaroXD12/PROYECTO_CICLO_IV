import { CursoAlumno } from "./Curso_alumno";
import { Docente } from "./Docente";
import { Parametros } from "./Parametros";
import { Persona } from "./Persona";
import { Roles } from "./Roles";
import { Cursoarticulado } from "./cursoaarticu";

export class Curso_Arti_Estu{
  id?: number;
  roles?: Roles;
  parametros?: Parametros;
  docente?: Docente;
  Persona?: Persona;
  curso_articu?: Cursoarticulado;
  curso_alumno?:CursoAlumno;

}
