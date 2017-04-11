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
var DateHelper_1 = require("../../helpers/DateHelper");
var httpService_1 = require("../../helpers/httpService");
var Missatges_service_1 = require("../../helpers/Missatges/Missatges.service");
var CalendariComponent = (function () {
    function CalendariComponent(http, _MS) {
        this.http = http;
        this._MS = _MS;
        //Entrem el SiteID per saber què carreguem
        this.SiteID = 1;
        this.burl = "http://www.casadecultura.eu/ajax";
        this.DH = new DateHelper_1.DateHelper();
        _MS.LlistatMissatgesSuccess.subscribe();
        _MS.LlistatMissatgesError.subscribe();
        this.onDiaEscollit = new core_1.EventEmitter();
    }
    CalendariComponent.prototype.ngOnInit = function () {
        //Carrego el llistat de dies dels tres propers mesos
        this.getData();
    };
    CalendariComponent.prototype.getData = function () {
        var _this = this;
        var url = this.burl + '/agenda/getCalendarInfo';
        var parm = { idS: this.SiteID, Formulari: this.Formulari };
        var ajax = this.http.post(url, parm).map(function (r) { return r.json(); });
        ajax.subscribe(function (R) {
            console.log(R);
            _this.Calendari = _this.getArrayWeeksAndDaysForPrintCalendar(_this.Formulari.MesosSelect, 3, R);
        }, function (Resposta) { return _this._MS.addError("getCalendarInfo", Resposta); });
    };
    CalendariComponent.prototype.getArrayWeeksAndDaysForPrintCalendar = function (monthYear, howManyMonths, DC) {
        if (howManyMonths === void 0) { howManyMonths = 3; }
        var DH = new DateHelper_1.DateHelper();
        var date = DH.fromSelectMonthToDate(monthYear);
        var linies = []; //Cada línia de la taula
        var MesActual = date.getMonth();
        var newDate = date;
        var DiesInicialsMes = 0;
        //Aquí carreguem on han d'anar els números de totes les línies
        while (howManyMonths > 0) {
            var LiniaMesActual = { L1: [], L2: [], L3: [], L4: [], L5: [], L6: [] };
            while (MesActual == date.getMonth()) {
                //Mirem quin dia de la setmana és
                var DiaDeLaSetmana = date.getDay();
                var CapDeSetmana = void 0;
                var DadesDia = {};
                var DayData = [];
                if (DiaDeLaSetmana == 0)
                    DiaDeLaSetmana = 7;
                //Si és el primer dia del mes, deixem lliures tants espais com faci falta
                if (date.getDate() == 1) {
                    DiesInicialsMes = (DiaDeLaSetmana - 2);
                    DadesDia = { 'dia': '', 'mes': '', 'class': 'Normal', 'DayData': DayData };
                    for (var i = DiaDeLaSetmana; i > 1; i--)
                        LiniaMesActual.L1.push(DadesDia);
                }
                //Calculem quina setmana li toca del mes
                var week = Math.floor((date.getDate() + DiesInicialsMes) / 7); //Ens diu quina setmana és
                //Guardem les dades del dia i marquem l'estil
                CapDeSetmana = (DiaDeLaSetmana == 7 || DiaDeLaSetmana == 6) ? "CapDeSetmana" : "Normal";
                DayData = this.CercaDadesDia(DC, date);
                DadesDia = { 'dia': date.getDate(), 'mes': date.getMonth(), 'class': CapDeSetmana, 'DayData': DayData };
                if (week == 0) {
                    LiniaMesActual.L1.push(DadesDia);
                }
                else if (week == 1) {
                    LiniaMesActual.L2.push(DadesDia);
                }
                else if (week == 2) {
                    LiniaMesActual.L3.push(DadesDia);
                }
                else if (week == 3) {
                    LiniaMesActual.L4.push(DadesDia);
                }
                else if (week == 4) {
                    LiniaMesActual.L5.push(DadesDia);
                }
                else if (week == 5) {
                    LiniaMesActual.L6.push(DadesDia);
                }
                newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                date = newDate;
            }
            //Afegim una columna buida 
            linies.push(LiniaMesActual);
            MesActual = date.getMonth();
            howManyMonths = howManyMonths - 1;
        }
        return linies;
    };
    CalendariComponent.prototype.showDay = function (DiaCalendari) {
        this.onDiaEscollit.next(DiaCalendari);
    };
    //Busca a l'array si troba la data corresponent al dia
    CalendariComponent.prototype.CercaDadesDia = function (DadesCalendari, DiaACercar) {
        var DH = new DateHelper_1.DateHelper();
        var DMYSQL = DH.convertDateToMysqlFormat(DiaACercar);
        var LlistatActivitats = [];
        for (var _i = 0, DadesCalendari_1 = DadesCalendari; _i < DadesCalendari_1.length; _i++) {
            var Row = DadesCalendari_1[_i];
            if (DMYSQL == Row.Dia) {
                LlistatActivitats.push(Row);
            }
        }
        return LlistatActivitats;
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
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CalendariComponent.prototype, "onDiaEscollit", void 0);
CalendariComponent = __decorate([
    core_1.Component({
        selector: 'calendari-agenda',
        templateUrl: 'app/components/agenda/templates/calendari.template.html',
        providers: [httpService_1.HttpService]
    }),
    __metadata("design:paramtypes", [httpService_1.HttpService, Missatges_service_1.MissatgesService])
], CalendariComponent);
exports.CalendariComponent = CalendariComponent;
//# sourceMappingURL=agenda.component.js.map
var DadesCalendari = (function () {
    function DadesCalendari() {
    }
    DadesCalendari.prototype.getHoraInici = function () {
        return new DateHelper_1.iTime(this.HoraInici).getShort();
    };
    return DadesCalendari;
}());
exports.DadesCalendari = DadesCalendari;
//# sourceMappingURL=calendari.component.js.map