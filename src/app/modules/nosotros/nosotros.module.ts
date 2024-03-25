import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { AniversarioComponent } from './components/aniversario/aniversario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
@NgModule({
  declarations: [AniversarioComponent, NosotrosComponent, NovedadesComponent, ContactoComponent],
  imports: [CommonModule, NosotrosRoutingModule, FormsModule, HttpClientModule],
})
export class NosotrosModule {}
