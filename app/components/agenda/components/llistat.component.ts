import {Component, Input, Output, EventEmitter} from '@angular/core';
import { DadesCalendari } from './calendari.component';

@Component({
    selector: 'llistat-agenda',
    templateUrl: 'app/components/agenda/templates/llistat.template.html'
})
export class LlistatComponent {

    @Input() public LlistatActivitats : DadesCalendari[] ;
    @Output() public onActivitatClick : EventEmitter<number>;

    constructor() {
        var self = this;
        this.onActivitatClick = new EventEmitter();
        
    }
    setDisplayName(value: String){
        var self = this;
        
    }
    setDisplayName2(value: String){
        var self = this;        
    }
    
}
//# sourceMappingURL=agenda.component.js.map