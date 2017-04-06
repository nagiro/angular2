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
var httpService_1 = require("../../helpers/httpService");
var Missatges_service_1 = require("../../helpers/Missatges/Missatges.service");
var filtre_component_1 = require("./filtre.component");
var AgendaComponent = (function () {
    function AgendaComponent(http, _MS) {
        this.http = http;
        this._MS = _MS;
        //Entrem el SiteID per saber què carreguem
        this.SiteID = 1;
        this.Missatges = [];
        _MS.LlistatMissatgesSuccess.subscribe();
        _MS.LlistatMissatgesError.subscribe();
        this.FormulariAgenda = new filtre_component_1.FormulariAgenda();
    }
    AgendaComponent.prototype.ngOnInit = function () { };
    AgendaComponent.prototype.updateData = function (F) {
        this.FormulariAgenda = F;
    };
    AgendaComponent.prototype.editActivitat = function (id) {
        this.ActivitatID = id;
    };
    return AgendaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AgendaComponent.prototype, "SiteID", void 0);
AgendaComponent = __decorate([
    core_1.Component({
        selector: 'agenda-component',
        templateUrl: 'app/components/agenda/templates/agenda.template.html',
        providers: [Missatges_service_1.MissatgesService, httpService_1.HttpService]
    }),
    __metadata("design:paramtypes", [httpService_1.HttpService, Missatges_service_1.MissatgesService])
], AgendaComponent);
exports.AgendaComponent = AgendaComponent;
//# sourceMappingURL=agenda.component.js.map 
//# sourceMappingURL=agenda.component.js.map