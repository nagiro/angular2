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
var httpService_1 = require("../helpers/httpService");
var Tipus_model_1 = require("../models/Tipus.model");
var Cicles_model_1 = require("../models/Cicles.model");
var Activitats_model_1 = require("../models/Activitats.model");
var AuxiliarObjects_1 = require("../helpers/AuxiliarObjects");
var AgendaComponent = (function () {
    function AgendaComponent(http) {
        this.http = http;
        //Entrem el SiteID per saber què carreguem
        this.SiteID = 1;
        this.burl = "http://www.casadecultura.eu/ajax";
        this.E = new AuxiliarObjects_1.MessageEmitter();
        this.Tabs = [false, true, true];
        this.getCiclesToSelectFromServer();
        this.getFormatsToSelectFromServer();
        this.Activitat = new Activitats_model_1.ActivitatsModel();
    }
    AgendaComponent.prototype.ngOnInit = function () {
    };
    /**
    * Funció que retorna els cicles per a un select
    **/
    AgendaComponent.prototype.getCiclesToSelectFromServer = function () {
        var _this = this;
        var url = this.burl + '/agenda/getCicles';
        var parm = { idS: this.SiteID };
        this.http.post(url, parm).subscribe(function (r) { return _this.getRes1(r); }, function (r) { return _this.E.throwError(new AuxiliarObjects_1.MessageList(r.json())); });
    };
    AgendaComponent.prototype.getRes1 = function (res) {
        this.CiclesSelect = new Cicles_model_1.CiclesArray(res).getLlistatSelect();
    };
    /**
    * Funció que retorna els formats per a un select
    **/
    AgendaComponent.prototype.getFormatsToSelectFromServer = function () {
        var _this = this;
        var url = this.burl + '/agenda/getFormats';
        var parm = { idS: this.SiteID, tipusNom: "form_act" };
        this.http.post(url, parm).subscribe(function (r) { return _this.FormatsSelect = new Tipus_model_1.TipusArray(r).getLlistatSelect(); }, function (r) { return _this.E.throwError(new AuxiliarObjects_1.MessageList(r.json())); });
    };
    /**
    * Guardem l'activitat en si
    **/
    AgendaComponent.prototype.onSubmitActivitatGeneral = function () {
        var _this = this;
        var url = this.burl + '/agenda/saveActivitat';
        var parm = { Activitat: this.Activitat, tipus: 1, idS: this.SiteID };
        this.http.post(url, parm).subscribe(function (r) { return _this.E.throwSuccess(new AuxiliarObjects_1.MessageList(r.json())); }, function (r) { return _this.E.throwError(new AuxiliarObjects_1.MessageList(r.json())); });
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
        templateUrl: 'app/components/agenda/agenda.template.html',
        providers: [httpService_1.HttpService]
    }),
    __metadata("design:paramtypes", [httpService_1.HttpService])
], AgendaComponent);
exports.AgendaComponent = AgendaComponent;
//# sourceMappingURL=agenda.component.js.map 
//# sourceMappingURL=agenda.component.js.map