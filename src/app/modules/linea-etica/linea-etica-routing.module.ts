import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DenunciaComponent } from './denuncia/denuncia.component';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasComponent } from './politicas/politicas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'denuncia', component: DenunciaComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'contacto', component: ContactoComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineaEticaRoutingModule {}
