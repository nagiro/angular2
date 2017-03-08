import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';

import { BrowserModule }       from '@angular/platform-browser';
import { AgendaComponent }     from './agenda.component.js';

import { TooltipModule }       from 'ng2-bootstrap';
import { TabsModule }          from 'ng2-bootstrap';

import {SelectModule}          from 'ng2-select';
import {SelectHelperComponent} from '../helpers/SelectHelperComponent';

@NgModule({
  
  declarations: [ 
            AgendaComponent,
            SelectHelperComponent
          ],
  imports:      [ 
  					BrowserModule,
            HttpModule,
  					TooltipModule.forRoot(),
  					TabsModule.forRoot(),
  					SelectModule            
  				],
  providers:    [ ],  
  exports:      [ AgendaComponent ],
  bootstrap:    [ AgendaComponent ]
})
export class AgendaModule { }

