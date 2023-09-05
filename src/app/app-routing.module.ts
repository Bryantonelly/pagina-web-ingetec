import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/nosotros/nosotros.module').then(m => m.NosotrosModule) }, // Redireccionar la ruta raíz al dashboard
  { path: 'lineas-negocios', loadChildren: () => import('./modules/lineas-negocios/lineas-negocios.module').then(m => m.LineasNegociosModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
