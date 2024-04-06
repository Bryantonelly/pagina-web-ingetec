import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { InicioComponent } from './inicio/inicio.component';
import { DenunciaComponent } from './denuncia/denuncia.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LineaEticaRoutingModule } from './linea-etica-routing.module';
@NgModule({
  declarations: [
    InicioComponent,
    DenunciaComponent,
    PoliticasComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    LineaEticaRoutingModule,
  ],
})
export class LineaEticaModule {}
