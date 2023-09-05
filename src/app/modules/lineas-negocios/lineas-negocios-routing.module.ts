import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineasNegociosComponent } from './lineas-negocios/lineas-negocios.component';

const routes: Routes = [
  { path: '', component: LineasNegociosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineasNegociosRoutingModule { }
