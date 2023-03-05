import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    IngresarComponent,
    
  ]
})
export class RoutesModule { }
