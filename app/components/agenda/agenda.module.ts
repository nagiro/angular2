import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';
import { FormsModule }         from '@angular/forms';

import { BrowserModule }       from '@angular/platform-browser';
import { AgendaComponent }     from './components/agenda.component.js';

import { TooltipModule, TabsModule, ModalModule }       from 'ng2-bootstrap';

import {SelectModule}          from 'ng2-select';
import {SelectHelperComponent, SiNoSelectHelper } from '../helpers/Selects/SelectHelperComponent';
import { ErrorComponent } from '../helpers/Modals/ErrorComponent';
import { ModalComponent } from '../helpers/Modals/ModalComponent';
import { FiltreAgendaComponent } from './components/filtre.component';
import { CalendariComponent } from './components/calendari.component';
import { LlistatComponent } from './components/llistat.component';
import { EditaActivitatComponent } from './components/edicio.component';



@NgModule({
  
  declarations: [ 
            AgendaComponent,
            SelectHelperComponent,
            SiNoSelectHelper,
            ErrorComponent,
            FiltreAgendaComponent,
            CalendariComponent,
            LlistatComponent,
            EditaActivitatComponent,
            ModalComponent,
            ErrorComponent
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

