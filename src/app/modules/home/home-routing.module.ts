import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from '../proyecto/listar/proyecto/proyecto.component';
import { ProyectoRegistrarComponent } from '../proyecto/registrar/proyecto-registrar/proyecto-registrar.component';
import { EditarProyectoComponent } from '../proyecto/editar/editar-proyecto/editar-proyecto.component';
import { ActividadPlaniComponent } from '../proyecto/regis-actividad_plani/actividad-plani/actividad-plani.component';
import { ActividadEjecuComponent } from '../proyecto/regis-actividad_ejecu/actividad-ejecu/actividad-ejecu.component';
import { RegisRolesComponent } from '../proyecto/registrar-roles/regis-roles/regis-roles.component';
import { MenuComponent } from '../menu/pages/menu/menu.component';
import { DocumentoIntervencionComponent } from '../documento-intervencion/listar/documento-intervencion/documento-intervencion.component';
import { AddIntervencionComponent } from '../documento-intervencion/añadir/add-intervencion/add-intervencion.component';
import { EditIntervencionComponent } from '../documento-intervencion/editar/edit-intervencion/edit-intervencion.component';
import { CursoComponent } from '../curso/pages/curso/curso.component';

import { AprobarProyectoComponent } from '../aprobar-proyecto/pages/aprobar-proyecto/aprobar-proyecto.component';
import { ComentarioComponent } from '../aprobar-proyecto/comentario/comentario.component';
import { ComentarComponent } from '../aprobar-proyecto/comentar/comentar.component';

import { RegistrargruposComponent } from '../grupos/pages/registrargrupos/registrargrupos.component';
import { ListaproyecComponent } from '../asistencia/page/listaproyec/listaproyec.component';
import { ListaestudiantesComponent } from '../asistencia/page/listaestudiantes/listaestudiantes.component';

import { InformefinalComponent } from '../informefinal/pages/informefinal/informefinal.component';
import { AddinformefinalComponent } from '../informefinal/pages/addinformefinal/addinformefinal.component';
import { VistaComponent } from '../aprobar-proyecto/vista/vista.component';
import { ListaproyecGruposComponent } from '../grupos/pages/listaproyec-grupos/ListaproyecGruposComponent';
import { ValidEviComponent } from '../validacion-evidencia/pages/valid-evi/valid-evi.component';
import { ValidacionEvidenciaComponent } from '../validacion-evidencia/pages/validacionevidencia/validacionevidencia.component';


const routes: Routes = [

  {
    path:'proyecto',
    component: ProyectoComponent,
    loadChildren: () => import('../proyecto/proyecto.module').then(m => m.ProyectoModule)
  },
  {
    path:'proyecto/registrar',
    component: ProyectoRegistrarComponent,
    loadChildren: () => import('../proyecto/proyecto-registrar.module').then(m => m.ProyectoRegistrarModule)
  },
  {
    path:'proyecto/editar/:id',
    component: EditarProyectoComponent,
    loadChildren: () => import('../proyecto/editar-proyecto.module').then(m => m.EditarProyectoModule)
  },
  {
    path:'proyecto/registrar_actividadP/:id',
    component: ActividadPlaniComponent,
    loadChildren: () => import('../proyecto/actividad-plani.module').then(m => m.ActividadPlaniModule)
  },
  {
    path:'proyecto/registrar_actividadE/:id',
    component: ActividadEjecuComponent,
    loadChildren: () => import('../proyecto/actividad-ejecu.module').then(m => m.ActividadEjecuModule)
  },
  {
    path:'proyecto/registrar_roles/:id',
    component: RegisRolesComponent,
    loadChildren: () => import('../proyecto/regis-roles.module').then(m => m.RegisRolesModule)
  },
  {
    path:'menu',
    component: MenuComponent,
    loadChildren: () => import('../menu/menu.module').then(m => m.MenuModule)
  },
  {
    path:'documento_intervencion',
    component: DocumentoIntervencionComponent,
    loadChildren: () => import('../documento-intervencion/documento-intervencion.module').then(m => m.DocumentoIntervencionModule)
  },
  {
    path:'documento_intervencion/add',
    component: AddIntervencionComponent,
    loadChildren: () => import('../documento-intervencion/add-intervencion.module').then(m => m.AddIntervencionModule)
  },
  {
    path:'documento_intervencion/edit/:id',
    component: EditIntervencionComponent,
    loadChildren: () => import('../documento-intervencion/edit-intervencion.module').then(m => m.EditIntervencionModule)
  },
  {
    path:'curso',
    component: CursoComponent,
    loadChildren: () => import('../curso/curso.module').then(m => m.CursoModule)
  },
  {
    path:'validacionevidencia',
    component: ValidacionEvidenciaComponent,
    loadChildren: () => import('../validacion-evidencia/validacion-evidencia.module').then(m => m.ValidacionEvidenciaModule)
  },
  {
    path:'validevi',
    component: ValidEviComponent,
    loadChildren: () => import('../validacion-evidencia/valid-evi.module').then(m => m.ValidEviModule)
  },
  {
    path:'aprobar',
    component: AprobarProyectoComponent,
    loadChildren: () => import('../aprobar-proyecto/aprobar-proyecto.module').then(m => m.AprobarProyectoModule)
  },
  {
    path:'aprobar/comentar/comentario',
    component: ComentarioComponent,
    loadChildren: () => import('../aprobar-proyecto/comentario.module').then(m => m.ComentarioModule)
  },
  {
    path:'aprobar/comentar/:id',
    component: ComentarComponent,
    loadChildren: () => import('../aprobar-proyecto/comentar.module').then(m => m.ComentarModule)
  },
  
  {
    path:'aprobar/vista',
    component: VistaComponent,
    loadChildren: () => import('../aprobar-proyecto/vista.module').then(m => m.VistaModule)
  },
 
  {
    path:'grupos',
    component: ListaproyecGruposComponent,
    loadChildren: () => import('../grupos/grupos.module').then(m => m.GruposModule)
  },
  {
  path:'registrargrupos',
    component: RegistrargruposComponent,
    loadChildren: () => import('../grupos/registrargrupos.module').then(m => m.RegistrargruposModule)
  },
  {
    path:'asistencia',
    component: ListaproyecComponent,
    loadChildren: () => import('../asistencia/asistencia.module').then(m => m.AsistenciaModule)
  },
  {
    path:'listarestudiantes',
    component: ListaestudiantesComponent,
    loadChildren: () => import('../asistencia/listaestudiantes.module').then(m => m.ListaestudiantesModule)
  },
  {
    path:'informefinal',
    component: InformefinalComponent,
    loadChildren: () => import('../informefinal/informefinal.module').then(m => m.InformefinalModule)
  },
  {
    path:'informefinal/add',
    component: AddinformefinalComponent,
    loadChildren: () => import('../informefinal/addinformefinal.module').then(m => m.AddinformefinalModule)
  },
  {
    path:'**',
    redirectTo:'proyecto'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
