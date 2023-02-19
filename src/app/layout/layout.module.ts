import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoutesModule } from '../routes/routes.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    
    
  ]
})
export class LayoutModule { }
