import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: '../app/components/welcome/welcome.template.html'
})
export class WelcomeComponent {
    constructor() {
        var self = this;
        self.displayName = '';
    }
    setDisplayName(value){
        var self = this;
        self.displayName = value;
    }
}
