import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineasNegociosRoutingModule } from './lineas-negocios-routing.module';
import { LineasNegociosComponent } from './lineas-negocios/lineas-negocios.component';



@NgModule({
  declarations: [
    LineasNegociosComponent
  ],
  imports: [
    CommonModule,
    LineasNegociosRoutingModule
  ]
})
export class LineasNegociosModule { }
