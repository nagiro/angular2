"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateHelper = (function () {
    function DateHelper() {
    }
    DateHelper.prototype.getDate = function () { };
    DateHelper.prototype.setDate = function (dia) { this.date = dia; };
    DateHelper.prototype.getDateBDD = function () { };
    DateHelper.prototype.setDateBDD = function () { };
    DateHelper.prototype.getArrayWeeksAndDaysForPrintCalendar = function (month, year, howManyMonths) {
        if (howManyMonths === void 0) { howManyMonths = 2; }
        var date = new Date(year, month, 1);
        var linies = { L1: [], L2: [], L3: [], L4: [], L5: [], L6: [] }; //Cada línia de la taula
        var MesActual = date.getMonth();
        var newDate = date;
        var DiesInicialsMes = 0;
        //Aquí carreguem on han d'anar els números de totes les línies
        while (howManyMonths > 0) {
            while (MesActual == date.getMonth()) {
                //Mirem quin dia de la setmana és
                var DiaDeLaSetmana = date.getDay();
                if (DiaDeLaSetmana == 0)
                    DiaDeLaSetmana = 7;
                //Si és el primer dia del mes, deixem lliures tants espais com faci falta
                if (date.getDate() == 1) {
                    DiesInicialsMes = (DiaDeLaSetmana - 2);
                    for (var i = DiaDeLaSetmana; i > 1; i--)
                        linies.L1.push({ dia: 0, mes: date.getMonth() });
                }
                var week = Math.floor((date.getDate() + DiesInicialsMes) / 7); //Ens diu quina setmana és
                if (week == 0) {
                    linies.L1.push({ dia: date.getDate(), mes: date.getMonth() });
                }
                else if (week == 1) {
                    linies.L2.push({ dia: date.getDate(), mes: date.getMonth() });
                }
                else if (week == 2) {
                    linies.L3.push({ dia: date.getDate(), mes: date.getMonth() });
                }
                else if (week == 3) {
                    linies.L4.push({ dia: date.getDate(), mes: date.getMonth() });
                }
                else if (week == 4) {
                    linies.L5.push({ dia: date.getDate(), mes: date.getMonth() });
                }
                else if (week == 5) {
                    linies.L6.push({ dia: date.getDate(), mes: date.getMonth() });
                }
                newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                date = newDate;
            }
            //Afegim una columna buida 
            linies.L1.push({ dia: -1, mes: date.getMonth() });
            linies.L2.push({ dia: -1, mes: date.getMonth() });
            linies.L3.push({ dia: -1, mes: date.getMonth() });
            linies.L4.push({ dia: -1, mes: date.getMonth() });
            linies.L5.push({ dia: -1, mes: date.getMonth() });
            linies.L6.push({ dia: -1, mes: date.getMonth() });
            MesActual = date.getMonth();
            howManyMonths = howManyMonths - 1;
        }
        return linies;
    };
    return DateHelper;
}());
exports.DateHelper = DateHelper;
var Time = (function () {
    function Time() {
    }
    return Time;
}());
exports.Time = Time;
//# sourceMappingURL=DateHelper.js.map