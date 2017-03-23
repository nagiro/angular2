import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';
import { FormsModule }         from '@angular/forms';

import { BrowserModule }       from '@angular/platform-browser';
import { AgendaComponent }     from './agenda.component.js';

import { TooltipModule, TabsModule, ModalModule }       from 'ng2-bootstrap';

import {SelectModule}          from 'ng2-select';
import {SelectHelperComponent, SiNoSelectHelper } from '../helpers/SelectHelperComponent';
import { ModalHelperComponent } from '../helpers/ModalHelperComponent';



@NgModule({
  
  declarations: [ 
            AgendaComponent,
            SelectHelperComponent,
            SiNoSelectHelper,
            ModalHelperComponent
          ],
  imports:      [ 
  					BrowserModule,
            HttpModule,
  					TooltipModule.forRoot(),
  					TabsModule.forRoot(),
            ModalModule.forRoot(),
  					SelectModule,
            FormsModule
  				],
  providers:    [ ],  
  exports:      [ AgendaComponent ],
  bootstrap:    [ AgendaComponent ]
})
export class AgendaModule { }

