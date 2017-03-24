"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HorarisModel = (function () {
    function HorarisModel() {
    }
    return HorarisModel;
}());
exports.HorarisModel = HorarisModel;
var HorarisSelectModel = (function () {
    // El puc construir a partir d'un JSON
    function HorarisSelectModel(Horari) {
        this.id = Horari.HorarisID;
        this.text = Horari.Dia.toString() + Horari.HoraInici.toString();
    }
    return HorarisSelectModel;
}());
exports.HorarisSelectModel = HorarisSelectModel;
/**
* Quan rebo una resposta del php.
**/
var HorarisArray = (function () {
    function HorarisArray(Llistat) {
        this.Llistat = [];
        this.LlistatSelect = [];
        this.Llistat = Llistat.json();
    }
    HorarisArray.prototype.getLlistatSelect = function () {
        for (var _i = 0, _a = this.Llistat; _i < _a.length; _i++) {
            var tmp = _a[_i];
            this.LlistatSelect.push(new HorarisSelectModel(tmp));
        }
        return this.LlistatSelect;
    };
    HorarisArray.prototype.getLlistat = function () {
        return this.Llistat;
    };
    return HorarisArray;
}());
exports.HorarisArray = HorarisArray;
var HorarisEspaisModel = (function () {
    function HorarisEspaisModel() {
    }
    return HorarisEspaisModel;
}());
exports.HorarisEspaisModel = HorarisEspaisModel;
/**
* Quan rebo una resposta del php.
**/
var HorarisEspaisArray = (function () {
    function HorarisEspaisArray(Llistat) {
        this.Llistat = [];
        this.Llistat = Llistat.json();
    }
    HorarisEspaisArray.prototype.getLlistat = function () {
        return this.Llistat;
    };
    return HorarisEspaisArray;
}());
exports.HorarisEspaisArray = HorarisEspaisArray;
//# sourceMappingURL=Horaris.model.js.map