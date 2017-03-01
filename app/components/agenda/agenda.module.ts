import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgendaComponent } from './agenda.component.js';

import { TooltipModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';

import {SelectModule} from 'ng2-select';

@NgModule({
  imports:      [ 
  					BrowserModule, 
  					TooltipModule.forRoot(),
  					TabsModule.forRoot(),
  					SelectModule
  				],
  providers:    [ ],
  declarations: [ AgendaComponent ],
  exports:      [ AgendaComponent ],
  bootstrap:    [ AgendaComponent ]
})
export class AgendaModule { }

