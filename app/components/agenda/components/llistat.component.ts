import {Component, Input, Output} from '@angular/core';
import { FormulariAgenda } from './filtre.component';

@Component({
    selector: 'llistat-agenda',
    templateUrl: 'app/components/agenda/templates/llistat.template.html'
})
export class LlistatComponent {

    @Input() public Formulari : FormulariAgenda;
    @Output() public onActivitatClick : number;

    constructor() {
        var self = this;
        
    }
    setDisplayName(value: String){
        var self = this;
        
    }
    setDisplayName2(value: String){
        var self = this;
        
    }
    
}
//# sourceMappingURL=agenda.component.js.map