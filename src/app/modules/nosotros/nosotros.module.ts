import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { AniversarioComponent } from './components/aniversario/aniversario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LineasNegociosComponent } from './components/lineas-negocios/lineas-negocios.component';
@NgModule({
  declarations: [
    AniversarioComponent,
    NosotrosComponent,
    NovedadesComponent,
    ContactoComponent,
    ProyectosComponent,
    LineasNegociosComponent,
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
  ],
})
export class NosotrosModule {}
