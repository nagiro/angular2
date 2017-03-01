import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgendaComponent } from './agenda.component.js';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ ],
  declarations: [ AgendaComponent ],
  exports:      [ AgendaComponent ],
  bootstrap:    [ AgendaComponent ]
})
export class AgendaModule { }
