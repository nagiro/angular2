import {Component} from '@angular/core';

@Component({
    selector: 'agenda-component',
    templateUrl: 'app/components/agenda/agenda.template.html'
})
export class AgendaComponent {
    constructor() {
        var selfAgenda = this;
        
    }

    alertMe(value: Boolean){
        alert('Hail to the king babe');
    }

}
//# sourceMappingURL=agenda.component.js.map