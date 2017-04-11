import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { DadesCalendari } from '../../agenda/components/calendari.component';
 
@Component({
  selector: 'popover-view',
  templateUrl: 'app/components/helpers/Modals/PopoverComponent.template.html'
})
export class PopoverCalendarComponent {
	
	@Input() public ActivitatsDia: DadesCalendari[];			
    @Input() public Dia: number;

	ngOnInit(){}

	ngOnDestroy() {}

}