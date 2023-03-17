import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { SeriesComponent } from './routes/series/series.component';
import { DashboardComponent } from './routes/components/dashboard/dashboard.component';
import { AgregarItemComponent } from './routes/components/agregar-item/agregar-item.component';


const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
    
  },
  {
    path:'peliculas',
    component:PeliculasComponent
  },
  {
    path:'series',
    component:SeriesComponent
  },
  {
    path:'ingresar',
    component:IngresarComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:'agregarItem',
    component: AgregarItemComponent
  },
  {
    path:"**",
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
