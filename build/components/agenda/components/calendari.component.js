"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var filtre_component_1 = require("./filtre.component");
var CalendariComponent = (function () {
    function CalendariComponent() {
        //Entrem el SiteID per saber què carreguem
        this.SiteID = 1;
    }
    CalendariComponent.prototype.ngOnInit = function () {
    };
    return CalendariComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CalendariComponent.prototype, "SiteID", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", filtre_component_1.FormulariAgenda)
], CalendariComponent.prototype, "Formulari", void 0);
CalendariComponent = __decorate([
    core_1.Component({
        selector: 'calendari-agenda',
        templateUrl: 'app/components/agenda/templates/calendari.template.html',
        providers: []
    }),
    __metadata("design:paramtypes", [])
], CalendariComponent);
exports.CalendariComponent = CalendariComponent;
//# sourceMappingURL=agenda.component.js.map 
//# sourceMappingURL=calendari.component.js.map