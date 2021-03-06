import { NgModule }            from '@angular/core';
import { HttpModule, Http }          from '@angular/http';
import { FormsModule }         from '@angular/forms';

import { BrowserModule }       from '@angular/platform-browser';
import { AgendaComponent }     from './components/agenda.component.js';

import { TooltipModule, TabsModule, ModalModule, PopoverModule }       from 'ng2-bootstrap';

import { SelectModule }          from 'ng2-select';
import { SelectHelperComponent, SiNoSelectHelper } from '../helpers/Selects/SelectHelperComponent';
import { ErrorComponent } from '../helpers/Modals/ErrorComponent';
import { ModalComponent } from '../helpers/Modals/ModalComponent';
import { FiltreAgendaComponent } from './components/filtre.component';
import { CalendariComponent } from './components/calendari.component';
import { LlistatComponent } from './components/llistat.component';
import { EditaActivitatComponent } from './components/edicio.component';
import { TextMaskModule } from 'angular2-text-mask';
import { DpDatePickerModule } from 'ng2-date-picker';
import { MissatgesComponent } from '../helpers/Missatges/Missatges.component';
import { MomentModule } from 'angular2-moment';
import { PopoverCalendarComponent } from '../helpers/Modals/PopoverComponent';




@NgModule({
  
  declarations: [ 
            AgendaComponent,
            SelectHelperComponent,
            SiNoSelectHelper,
            FiltreAgendaComponent,
            CalendariComponent,
            LlistatComponent,
            EditaActivitatComponent,
            ModalComponent,
            ErrorComponent,
            MissatgesComponent,
            PopoverCalendarComponent
          ],
  imports:      [ 
  					BrowserModule,
            HttpModule,
  					TooltipModule.forRoot(),
  					TabsModule.forRoot(),
            ModalModule.forRoot(),
            PopoverModule.forRoot(),
  					SelectModule,
            FormsModule,
            TextMaskModule,
            DpDatePickerModule,
            MomentModule
  				],
  providers:    [ ],  
  exports:      [ AgendaComponent ],
  bootstrap:    [ AgendaComponent ]
})
export class AgendaModule { }

