// app.module.ts
// Módulo raíz de la aplicación: aquí se declaran componentes, pipes y se importan módulos necesarios.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFilterPipe,
    OperasBasComponent // la pipe debe estar declarada para poder usarse en templates
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // necesario para usar [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
