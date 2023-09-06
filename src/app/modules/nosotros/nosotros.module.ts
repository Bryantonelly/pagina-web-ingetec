import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { AniversarioComponent } from './components/aniversario/aniversario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AniversarioComponent,
    NosotrosComponent,
    SobreNosotrosComponent,
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    FormsModule,
    HttpClientModule,
    // BrowserModule,
  ],
})
export class NosotrosModule {}
