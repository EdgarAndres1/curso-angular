import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { SeriesComponent } from './routes/series/series.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
    
  },
  {
    path:"peliculas",
    component:PeliculasComponent
  },
  {
    path:"series",
    component:SeriesComponent
  },
  {
    path:"ingresar",
    component:IngresarComponent
  },
  {
    path:"**",
    redirectTo:"inicio"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
