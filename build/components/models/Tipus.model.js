"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipusModel = (function () {
    function TipusModel() {
    }
    TipusModel.prototype.toSelect = function () { return new TipusSelectModel(this); };
    return TipusModel;
}());
exports.TipusModel = TipusModel;
var TipusSelectModel = (function () {
    // El puc construir a partir d'un JSON
    function TipusSelectModel(Tipus) {
        this.id = Tipus.idTipus;
        this.text = Tipus.tipusDesc;
    }
    return TipusSelectModel;
}());
exports.TipusSelectModel = TipusSelectModel;
/**
* Quan rebo una resposta del php.
**/
var TipusArray = (function () {
    function TipusArray(Llistat) {
        this.Llistat = [];
        this.LlistatSelect = [];
        this.Llistat = Llistat.json();
    }
    TipusArray.prototype.getLlistatSelect = function () {
        for (var _i = 0, _a = this.Llistat; _i < _a.length; _i++) {
            var tmp = _a[_i];
            this.LlistatSelect.push(new TipusSelectModel(tmp));
        }
        return this.LlistatSelect;
    };
    TipusArray.prototype.getLlistat = function () {
        return this.Llistat;
    };
    return TipusArray;
}());
exports.TipusArray = TipusArray;
//# sourceMappingURL=Tipus.model.js.map