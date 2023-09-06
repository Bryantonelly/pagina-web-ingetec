import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { AniversarioComponent } from './components/aniversario/aniversario.component';



@NgModule({
  declarations: [
  
    AniversarioComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
  ]
})
export class NosotrosModule { }
