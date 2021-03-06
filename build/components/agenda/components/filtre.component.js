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
var AuxiliarObjects_1 = require("../../helpers/AuxiliarObjects");
var SelectModelClass_1 = require("../../helpers/Selects/SelectModelClass");
var Missatges_service_1 = require("../../helpers/Missatges/Missatges.service");
var FiltreAgendaComponent = (function () {
    function FiltreAgendaComponent(http, _MS) {
        this.http = http;
        this._MS = _MS;
        //Entrem el SiteID per saber què carreguem
        this.SiteID = 1;
        this.F = new FormulariAgenda();
        this.Text = "";
        this.MesosSelect = [];
        this.OrdenacioSelect = [new SelectModelClass_1.SelectModelClass(1, 'Data'), new SelectModelClass_1.SelectModelClass(2, 'Espais')];
        this.TagsSelect = [];
        this.Errors = new AuxiliarObjects_1.MessageEmitter();
        this.selectedData = new Date();
        this.datePickerConfig = { firstDayOfWeek: "mo",
            calendarsAmount: "1",
            format: "DD/MM/YYYY",
            allowMultiSelect: false,
            weekdayNames: { su: 'dg', mo: 'dl', tu: 'dt', we: 'dc', th: 'dj', fr: 'dv', sa: 'ds' }
        };
        this.burl = "http://www.casadecultura.eu/ajax";
        _MS.LlistatMissatgesSuccess.subscribe();
        _MS.LlistatMissatgesError.subscribe();
        this.onFormulari = new core_1.EventEmitter();
    }
    FiltreAgendaComponent.prototype.ngOnInit = function () {
        this.getFilterInfoFromServer();
        this.mascara = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    };
    /**
    * Funció que retorna els cicles per a un select
    **/
    FiltreAgendaComponent.prototype.getFilterInfoFromServer = function () {
        var _this = this;
        var url = this.burl + '/agenda/getFilterInfo';
        var parm = { idS: this.SiteID };
        var ajax = this.http.post(url, parm).map(function (r) { return r.json(); });
        ajax.subscribe(function (r) {
            _this.Text = r.Text;
            _this.MesosSelect = r.MesosSelect;
            _this.OrdenacioSelect = r.OrdenacioSelect;
            _this.TagsSelect = r.Tags;
            _this.Dia = r.Dia;
        }, function (Resposta) { return _this._MS.addError("getFilterInfoFromServer", Resposta); });
    };
    //Quan cliquem el botó de filtra, carreguem les dades i les enviem
    FiltreAgendaComponent.prototype.onSubmitFiltra = function () {
        this.onFormulari.emit(this.F);
    };
    FiltreAgendaComponent.prototype.setText = function () { };
    FiltreAgendaComponent.prototype.setMes = function ($e) { console.log("He rebut el valor" + $e); console.log($e); };
    FiltreAgendaComponent.prototype.setOrdenacio = function () { };
    FiltreAgendaComponent.prototype.setTags = function ($e, $tipus) {
        if ($tipus == 'data') {
            this.F.TagsSelect = $e;
        }
    };
    FiltreAgendaComponent.prototype.setDia = function () { };
    return FiltreAgendaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FiltreAgendaComponent.prototype, "SiteID", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FiltreAgendaComponent.prototype, "onFormulari", void 0);
FiltreAgendaComponent = __decorate([
    core_1.Component({
        selector: 'filtre-agenda',
        templateUrl: 'app/components/agenda/templates/filtre.template.html',
        providers: [httpService_1.HttpService]
    }),
    __metadata("design:paramtypes", [httpService_1.HttpService, Missatges_service_1.MissatgesService])
], FiltreAgendaComponent);
exports.FiltreAgendaComponent = FiltreAgendaComponent;
var FormulariAgenda = (function () {
    function FormulariAgenda() {
        this.Text = "";
        var avui = new Date();
        this.Text = "";
        this.MesosSelect = ((avui.getMonth() + 1) * 10000) + (avui.getFullYear() - 1); //Format MMYYYY
        this.OrdenacioSelect = 0;
        this.TagsSelect = [];
        this.Dia = "";
    }
    FormulariAgenda.prototype.hasDia = function () {
        return (this.Dia.length > 0);
    };
    return FormulariAgenda;
}());
exports.FormulariAgenda = FormulariAgenda;
//# sourceMappingURL=filtre.component.js.map