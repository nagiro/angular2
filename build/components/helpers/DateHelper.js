"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateHelper = (function () {
    function DateHelper() {
    }
    DateHelper.prototype.getDate = function () { };
    DateHelper.prototype.setDate = function (dia) { this.date = dia; };
    DateHelper.prototype.getDateBDD = function () { };
    DateHelper.prototype.setDateBDD = function () { };
    DateHelper.prototype.fromSelectMonthToDate = function (mmyyyy) {
        var D = new Date();
        var Month = (Math.floor(mmyyyy / 10000));
        var Year = ((mmyyyy / 10000) - Month) * 10000;
        return new Date(Year, (Month - 1), 1);
    };
    DateHelper.prototype.convertDateToMysqlFormat = function (D) {
        var dd = D.getDate();
        var mm = D.getMonth() + 1; //January is 0!    
        var yyyy = D.getFullYear();
        var data;
        if (dd < 10)
            data = data + '0' + dd;
        if (mm < 10)
            data = data + '/0' + mm;
        return yyyy + '-' + (((mm < 10) ? '0' : '') + mm) + '-' + (((dd < 10) ? '0' : '') + dd);
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
var iTime = (function () {
    function iTime(D) {
        var A = D.split(":");
        this.H = A[0];
        this.M = A[1];
        this.S = A[2];
    }
    iTime.prototype.getShort = function () {
        return this.H + ":" + this.M;
    };
    return iTime;
}());
exports.iTime = iTime;
//# sourceMappingURL=DateHelper.js.map